import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];

  constructor(private readonly postService: PostService) {
    this.postService.getAllPosts().subscribe({
      next: (posts) => this.posts = posts
    });
  }

  ngOnInit(): void { }

}