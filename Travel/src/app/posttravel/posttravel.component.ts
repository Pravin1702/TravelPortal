import { Component, OnInit } from '@angular/core';
import { Request } from '../models/request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-posttravel',
  templateUrl: './posttravel.component.html',
  styleUrls: ['./posttravel.component.css']
})
export class PosttravelComponent implements OnInit {
  request:any;
  urole:any;
  name:any;
  id:any;

  constructor(private requestservice:RequestService) {
    this.urole=localStorage.getItem("role");
    this.name=localStorage.getItem("uname");
    this.id=localStorage.getItem("id");
    if(this.urole=='deptment' || this.urole=='hr')
    {
      this.requestservice.getAllpostEmployee().subscribe(data=>{
        console.log(data);
        this.request=data 
      });
    }
    else {
      this.request=new Request();
      this.request.employeeId=this.id;
      this.requestservice.getpostByEmployee(this.request).subscribe(data=>{
        console.log(data);
         this.request=data 
       });
    }
   }

  ngOnInit(): void {
  }

}
