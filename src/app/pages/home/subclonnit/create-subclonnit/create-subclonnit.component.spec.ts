import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubclonnitComponent } from './create-subclonnit.component';

describe('CreateSubclonnitComponent', () => {
  let component: CreateSubclonnitComponent;
  let fixture: ComponentFixture<CreateSubclonnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubclonnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubclonnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
