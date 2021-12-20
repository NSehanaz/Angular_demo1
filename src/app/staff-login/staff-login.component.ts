import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  // password:string='';
  // email:string='';
  // mobile!: number;

  userInputs:any =[];
  constructor() { }

  ngOnInit(): void {
  }

  loginForm:FormGroup = new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]{1}[0-9a-zA-Z_.-]{3,}[@][a-z]{1,}[.][a-z]{1,}')]),
    'mobile':new FormControl(null,[Validators.required,Validators.pattern('[789][0-9]{9}')]),
    'password':new FormControl(null,Validators.required)
  });
  onSubmit(){
    console.log(this.loginForm);
    this.userInputs.push({email:this.loginForm.value.email,mobile:this.loginForm.value.mobile,password:this.loginForm.value.password});
    console.log(this.userInputs);
  }
}
