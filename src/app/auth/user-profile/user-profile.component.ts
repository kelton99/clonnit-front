import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { CommentService } from 'src/app/comment/comment.service';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name: string;
  posts: PostModel[];
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly postService: PostService,
    private readonly commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name'];

    this.postService.getAllPostsByUser(this.name).subscribe({
      next: (data) => {
        this.posts = data;
        this.postLength = data.length;
      }
    });

    this.commentService.getAllCommentsByUser(this.name).subscribe({
      next: (data) => {
        this.comments = data;
        this.commentLength = data.length;
      }
    });
  }
}
