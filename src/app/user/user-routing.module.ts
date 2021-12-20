import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usercomp1Component } from './usercomp1/usercomp1.component';
import { Usercomp2Component } from './usercomp2/usercomp2.component';

const routes: Routes = [
  {path:'',component:Usercomp1Component},
  {path:'userComp2',component:Usercomp2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
