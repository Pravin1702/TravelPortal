import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Request } from '../models/request';
import { ProfileComponent } from '../profile/profile.component';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request:Request;
  role:any;
  name:any;

  constructor(private requestservice:RequestService,
    private router:Router,
    private dialogRef:MatDialog) {
      this.request=new Request();
      this.role=localStorage.getItem("role");
      this.name=localStorage.getItem("uname");
     }

     AddRequest(){
        this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
          console.log(sample);});
     }
     Home(){

    }
    Request(){
      this.router.navigateByUrl("request");
  
    }
    status(){
      this.router.navigateByUrl("status");
  
    }
    paststatus(){
  
    }
    Logout(){
      localStorage.clear();
      this.router.navigateByUrl("");
    }
    open(){
      this.dialogRef.open(ProfileComponent);
  
    }

     reset(){
       this.request=new Request();
     }

  ngOnInit(): void {
  }

}
