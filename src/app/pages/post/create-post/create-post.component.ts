import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubclonnitModel } from 'src/app/pages/home/subclonnit/subclonnit-response';
import { SubclonnitService } from 'src/app/pages/home/subclonnit/subclonnit.service';
import { PostService } from 'src/app/shared/post.service';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  subclonnits: Array<SubclonnitModel>

  constructor(
    private readonly router: Router,
    private readonly postService: PostService,
    private readonly subclonnitService: SubclonnitService,
  ) { }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subclonnitName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.subclonnitService.getAllSubclonnits().subscribe({
      next: (data) => this.subclonnits = data,
      error: (e) => throwError(() => e)
    })
  }

  createPost() {
    const postPayload: CreatePostPayload = {
      postName: this.createPostForm.get('postName')?.value,
      subclonnitName: this.createPostForm.get('subclonnitName')?.value,
      description: this.createPostForm.get('description')?.value,
    }

    this.postService.createPost(postPayload).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (e) => throwError(() => e)
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }
}