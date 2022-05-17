import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-approvel',
  templateUrl: './approvel.component.html',
  styleUrls: ['./approvel.component.css']
})
export class ApprovelComponent implements OnInit {
views:any;
role:any;
id:any;
name:any;
  constructor(private requestservice:RequestService,
    private router:Router,
    private dialogRef:MatDialog) {
    this.role=localStorage.getItem("role");
    this.name=localStorage.getItem("uname");
    this.id=localStorage.getItem("id");
    this.requestservice.getAllEmployee().subscribe(data=>{
      console.log(data);
      this.views=data
    }); 
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

   

  ngOnInit(): void {
  }

}
