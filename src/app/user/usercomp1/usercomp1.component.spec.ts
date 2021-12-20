import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercomp1Component } from './usercomp1.component';

describe('Usercomp1Component', () => {
  let component: Usercomp1Component;
  let fixture: ComponentFixture<Usercomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usercomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usercomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
