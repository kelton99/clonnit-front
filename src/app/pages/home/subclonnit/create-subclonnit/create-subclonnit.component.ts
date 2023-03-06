import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubclonnitService } from '../subclonnit.service';

@Component({
  selector: 'app-create-subclonnit',
  templateUrl: './create-subclonnit.component.html',
  styleUrls: ['./create-subclonnit.component.css']
})
export class CreateSubclonnitComponent implements OnInit {

  createSubclonnitForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly subclonnitService: SubclonnitService,
  ) { }

  ngOnInit(): void {
    this.createSubclonnitForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubclonnit() {
    const subclonnitModel = {
      name: this.createSubclonnitForm.get('title')?.value,
      description: this.createSubclonnitForm.get('description')?.value
    };

    this.subclonnitService.createSubclonnit(subclonnitModel).subscribe({
      next: () => this.router.navigateByUrl('/list-subclonnits'),
      error: (e) => throwError(() => e)
    })
  }
}