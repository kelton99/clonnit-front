import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { PostService } from 'src/app/shared/post.service';
import { SubclonnitModel } from 'src/app/subclonnit/subclonnit-response';
import { SubclonnitService } from 'src/app/subclonnit/subclonnit.service';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subclonnits: Array<SubclonnitModel>

  constructor(
    private readonly router: Router,
    private readonly postService: PostService,
    private readonly subclonnitService: SubclonnitService,
    private readonly authService: AuthService
  ) { 
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subclonnitName: ''
    }
  }

  ngOnInit(): void { 

    if(!this.authService.getJwtToken())
      this.router.navigateByUrl('/login')

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
    this.postPayload.postName = this.createPostForm.get('postName')?.value;
    this.postPayload.subclonnitName = this.createPostForm.get('subclonnitName')?.value;
    this.postPayload.url = this.createPostForm.get('url')?.value;
    this.postPayload.description = this.createPostForm.get('description')?.value;
  
    this.postService.createPost(this.postPayload).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (e) => throwError(() => e)
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }
}