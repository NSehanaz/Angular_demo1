import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-courses-available',
  templateUrl: './courses-available.component.html',
  styleUrls: ['./courses-available.component.css']
})
export class CoursesAvailableComponent implements OnInit {

  constructor(public service : DataService) { }

  ngOnInit(): void {
  }

}
