import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { Maincomp1Component } from './maincomp1/maincomp1.component';
import { Maincomp2Component } from './maincomp2/maincomp2.component';


@NgModule({
  declarations: [
    Maincomp1Component,
    Maincomp2Component
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
