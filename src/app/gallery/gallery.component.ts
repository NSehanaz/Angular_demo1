import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  dataArray:any=[];
  constructor(public dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getApiData().subscribe(
      data=>{
        this.dataArray=data;
        console.log(this.dataArray);
      }
    )
  }

}
