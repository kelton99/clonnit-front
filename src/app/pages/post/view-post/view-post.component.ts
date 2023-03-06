import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { CommentService } from 'src/app/comment/comment.service';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  postId: number;
  post: PostModel;
  commentForm: FormGroup;
  comments: CommentPayload[] = [];

  constructor(
    private readonly postService: PostService,
    private readonly activateRoute: ActivatedRoute,
    private readonly commentService: CommentService,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.postId = this.activateRoute.snapshot.params['id'];
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });

    this.getPostById();
    this.getCommentsForPost();
  }

  postComment() {
    const commentPayload: CommentPayload = {
      text: this.commentForm.get('text')?.value,
      postId: this.postId
    }

    this.commentService.postComment(commentPayload).subscribe({
      next: (data) => {
        this.commentForm.get('text')?.setValue('');
        this.comments.push(data);
      },
      error: (e) => throwError(() => e)
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  private getPostById() {
    this.postService.getPost(this.postId).subscribe({
      next: (data) => this.post = data,
      error: (e) => throwError(() => e)
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe({
      next: (data) => {
        console.log(data)
        this.comments = data
      },
      error: (e) => throwError(() => e)
    })
  }
}