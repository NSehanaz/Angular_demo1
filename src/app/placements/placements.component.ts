import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  recuitDetails:any = [];
  studentDetail:any = [];
  constructor(public ser : DataService) { }

  ngOnInit(): void {
    this.recuitDetails = this.ser.recuitDetails;
    this.studentDetail = this.ser.studentDetail;

  }

 
}
