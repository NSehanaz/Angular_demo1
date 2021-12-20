import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:string="The Manipal University"
  showNotification = false;
  showLogin=false;

  toggleNotification(){
    this.showNotification=!this.showNotification;
  }
  toggleLogin(){
    this.showLogin=!this.showLogin;
  }

}
