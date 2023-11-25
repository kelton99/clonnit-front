import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  @Input() posts: Array<PostModel> = [];
  faComments = faComments;

  constructor(
    private readonly postService: PostService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

  deletePost(id: number) {
    this.postService.deletePostById(id).subscribe({
      next: () => {
        this.posts = this.posts.filter(post => post.id !== id)
        this.toastr.success('Post Deleted');
      },
      error: (e) => throwError(() => e),
    })
  }

  isCurrentUserAuthor(author: string) {
    return author === this.authService.getUsername();
  }
}