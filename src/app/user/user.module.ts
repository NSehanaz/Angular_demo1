import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { Usercomp1Component } from './usercomp1/usercomp1.component';
import { Usercomp2Component } from './usercomp2/usercomp2.component';


@NgModule({
  declarations: [
    Usercomp1Component,
    Usercomp2Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
