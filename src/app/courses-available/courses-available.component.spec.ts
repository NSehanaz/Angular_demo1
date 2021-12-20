import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAvailableComponent } from './courses-available.component';

describe('CoursesAvailableComponent', () => {
  let component: CoursesAvailableComponent;
  let fixture: ComponentFixture<CoursesAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
