import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Maincomp1Component } from './maincomp1/maincomp1.component';
import { Maincomp2Component } from './maincomp2/maincomp2.component';

const routes: Routes = [
  {path:'',component: Maincomp1Component},
  {path:'mainComp2',component: Maincomp2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
