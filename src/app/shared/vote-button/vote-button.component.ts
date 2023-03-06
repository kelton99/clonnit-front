import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';
import { VoteService } from '../vote.service';
import { VotePayload } from './vote-payload';
import { VoteType } from './vote-type';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;

  constructor(
    private readonly voteService: VoteService,
    private readonly authService: AuthService,
    private readonly postService: PostService,
    private readonly toastr: ToastrService
  ) {
    this.authService.loggedIn.subscribe({
      next: (data: boolean) => this.isLoggedIn = data
    })
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost() {
    this.vote(VoteType.UPVOTE);
    this.downvoteColor = '';
  }

  downvotePost() {
    this.vote(VoteType.DOWNVOTE);
    this.upvoteColor = '';
  }

  private vote(voteType: VoteType) {
    const votePayload: VotePayload = {
      voteType: voteType,
      postId: this.post.id
    }

    this.voteService.vote(votePayload).subscribe({
      next: () => this.updateVoteDetails(),
      error: (error) => {
        this.toastr.error(error.error.message);
        throw new Error(error);
      }
    });
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });
  }
}
