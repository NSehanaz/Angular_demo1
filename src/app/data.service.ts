import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {}

  recuitDetails=[
    {name:'HCL Technologies',path:'../../assets/hcl.png',openings:'50',package:'12 LPA',location:'PAN India',qualification:'B.E'},
    {name:'Infosys',path:'../../assets/infosys.png' ,openings:'25',package:'15 LPA',location:'PAN India',qualification:'B.E'},
    {name:'CTS',path:'../../assets/cognizant.jfif',openings:'30',package:'15 LPA',location:'PAN India',qualification:'B.E'},
    {name:'TCS',path:'../../assets/TCS.jpg',openings:'40',package:'15 LPA',location:'PAN India',qualification:'B.E'},
    {name:'Wipro',path:'../../assets/wipro.png',openings:'40',package:'15 LPA',location:'PAN India',qualification:'B.E'},
    {name:'Microsoft',path:'../../assets/microsoft.jpg',openings:'30',package:'15 LPA',location:'PAN India',qualification:'B.E'}
  ];
  studentDetail=[
    {Sno:'1',studentName:'student1',branchName:'IT',recruiterName:'HCL',package:'10'},
    {Sno:'2',studentName:'student2',branchName:'CSE',recruiterName:'WIPRO',package:'10'},
    {Sno:'1',studentName:'student3',branchName:'EEE',recruiterName:'CTS',package:'10'},
    {Sno:'1',studentName:'student4',branchName:'IT',recruiterName:'TCS',package:'10'},
    {Sno:'1',studentName:'student5',branchName:'ECE',recruiterName:'Infosys',package:'10'},
    {Sno:'1',studentName:'student6',branchName:'EIE',recruiterName:'TCS',package:'10'},
    {Sno:'1',studentName:'student7',branchName:'Mechanical',recruiterName:'CTS',package:'10'},
    {Sno:'1',studentName:'student8',branchName:'Mechanical',recruiterName:'HCL',package:'10'},
    {Sno:'1',studentName:'student9',branchName:'ICE',recruiterName:'HCL',package:'10'},
    {Sno:'1',studentName:'student10',branchName:'IT',recruiterName:'HCL',package:'10'}
  ];

  courses=[
    {Sno:'1',course:'be Mechanical',total_seats:'100',govt_seats:'30',self_fin_seats:'70',course_start_date:'10-Mar-2022'},
    {Sno:'2',course:'be CSE',total_seats:'150',govt_seats:'50',self_fin_seats:'100',course_start_date:'10-Mar-2022'},
    {Sno:'3',course:'be EEE',total_seats:'120',govt_seats:'30',self_fin_seats:'90',course_start_date:'10-Mar-2022'},
    {Sno:'4',course:'be ECE',total_seats:'150',govt_seats:'50',self_fin_seats:'100',course_start_date:'10-Mar-2022'},
    {Sno:'5',course:'be CIVIL',total_seats:'100',govt_seats:'30',self_fin_seats:'70',course_start_date:'10-Mar-2022'},
    {Sno:'6',course:'be IT',total_seats:'150',govt_seats:'50',self_fin_seats:'100',course_start_date:'10-Mar-2022'}
  ];

  getApiData() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
