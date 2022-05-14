import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:any;age:any;mid:any;mob:any;
  email:any;dob:any;dept:any;
  region:any;
  role:any;
  id:any;
  
    constructor(public dialog:MatDialog) { 
      this.id=localStorage.getItem("id");
      this.name=localStorage.getItem("uname");
      this.email=localStorage.getItem("email");
      this.region=localStorage.getItem("region");
      this.role=localStorage.getItem("role");
      this.mid=localStorage.getItem("mid");
      this.age=localStorage.getItem("age");
      this.mob=localStorage.getItem("mob");
      this.dob=localStorage.getItem("dob");
      this.dept=localStorage.getItem("dept");
    }
     noclick(){
       this.dialog.closeAll();
     }

  ngOnInit(): void {
  }

}
