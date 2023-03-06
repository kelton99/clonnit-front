import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubclonnitsComponent } from './list-subclonnits.component';

describe('ListSubclonnitsComponent', () => {
  let component: ListSubclonnitsComponent;
  let fixture: ComponentFixture<ListSubclonnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubclonnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubclonnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
