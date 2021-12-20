import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInput:any = [];

  onSubmit(sform:NgForm){
      console.log(sform);
      this.userInput.push({email:sform.value.email,mobile:sform.value.number,password:sform.value.password});
      console.log(this.userInput);
    }

}
