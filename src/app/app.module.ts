import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlacementsComponent } from './placements/placements.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesAvailableComponent } from './courses-available/courses-available.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    SidenavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    PlacementsComponent,
    ContactUsComponent,
    CoursesAvailableComponent,
    StudentLoginComponent,
    StaffLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
