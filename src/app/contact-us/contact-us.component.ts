import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  name:string='';
  email:string='';
  mobile!: number;
  date:string='';
  password:string='';
  message:string='';

}
