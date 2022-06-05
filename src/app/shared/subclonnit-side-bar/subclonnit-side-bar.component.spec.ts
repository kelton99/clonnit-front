import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclonnitSideBarComponent } from './subclonnit-side-bar.component';

describe('SubclonnitSideBarComponent', () => {
  let component: SubclonnitSideBarComponent;
  let fixture: ComponentFixture<SubclonnitSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubclonnitSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubclonnitSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
