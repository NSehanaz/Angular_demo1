import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  showMoreContent = false;
  btnValue = "See more";
  constructor() { }

  ngOnInit(): void {
  }

  showMore(){
    this.showMoreContent = !this.showMoreContent;
    if(this.showMoreContent==false){
      this.btnValue="See more";
    }
    else{
      this.btnValue="See less";
    }
    
  }

}
