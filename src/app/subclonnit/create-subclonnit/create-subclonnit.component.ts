import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { SubclonnitModel } from '../subclonnit-response';
import { SubclonnitService } from '../subclonnit.service';

@Component({
  selector: 'app-create-subclonnit',
  templateUrl: './create-subclonnit.component.html',
  styleUrls: ['./create-subclonnit.component.css']
})
export class CreateSubclonnitComponent implements OnInit {

  createSubclonnitForm: FormGroup;
  subclonnitModel: SubclonnitModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(
    private readonly router: Router,
    private readonly subclonnitService: SubclonnitService,
  ) { }

  ngOnInit(): void {
    this.createSubclonnitForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subclonnitModel = {
      name: '',
      description: ''
    }
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubclonnit() {
    this.subclonnitModel.name = this.createSubclonnitForm.get('title')?.value;
    this.subclonnitModel.description = this.createSubclonnitForm.get('description')?.value;
    this.subclonnitService.createSubclonnit(this.subclonnitModel).subscribe({
      next: () => this.router.navigateByUrl('/list-subclonnits'),
      error: (e) => throwError(() => e)
    })
  }
}