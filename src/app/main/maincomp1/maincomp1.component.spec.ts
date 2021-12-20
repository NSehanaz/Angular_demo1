import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomp1Component } from './maincomp1.component';

describe('Maincomp1Component', () => {
  let component: Maincomp1Component;
  let fixture: ComponentFixture<Maincomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maincomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
