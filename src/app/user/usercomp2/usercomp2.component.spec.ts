import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercomp2Component } from './usercomp2.component';

describe('Usercomp2Component', () => {
  let component: Usercomp2Component;
  let fixture: ComponentFixture<Usercomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usercomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usercomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
