import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesAvailableComponent } from './courses-available/courses-available.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PlacementsComponent } from './placements/placements.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'courses',component:CoursesAvailableComponent},
  {path:'placements',component:PlacementsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'student-login',component:StudentLoginComponent},
  {path:'staff-login',component:StaffLoginComponent},
  {path:'main',loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)},
  {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
