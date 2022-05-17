import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  views:any;
  name:any;

  constructor(private userservice:UserService,
    private router:Router,
    private dialogRef:MatDialog) {
      this.name=localStorage.getItem("uname");
    userservice.getviews().subscribe(data=>{
      console.log(data);
      this.views=data 
    });
   }

  ngOnInit(): void {
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
  


}
