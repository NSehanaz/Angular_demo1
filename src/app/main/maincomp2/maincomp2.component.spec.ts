import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomp2Component } from './maincomp2.component';

describe('Maincomp2Component', () => {
  let component: Maincomp2Component;
  let fixture: ComponentFixture<Maincomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maincomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
