import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApprovelComponent } from '../approvel/approvel.component';
import { PosttravelComponent } from '../posttravel/posttravel.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { RequestService } from '../service/request.service';
import { ViewsComponent } from '../views/views.component';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  name:any;

  constructor(private dialogRef:MatDialog,
    private router:Router,
    private requestservice:RequestService) { 
      this.name=localStorage.getItem("uname");      
      if(this.name==null)
      {
        this.router.navigateByUrl("");
      }
    }

  ngOnInit(): void {
  }

  open(){
    this.dialogRef.open(ProfileComponent);
   }

   AddEmployee(){
    this.dialogRef.open(RegisterComponent);
   }

   GetAllEmployee(){
    this.dialogRef.open(ViewsComponent);
   }

 
  Logout(){
    localStorage.clear();
    this.router.navigateByUrl("");
   }
   status(){
    this.dialogRef.open(ApprovelComponent);
   }
   paststatus(){
    this.dialogRef.open(PosttravelComponent);
   }
  //  GetAllonline(){
  //   this.router.navigateByUrl("status"); 
  //  }
  //  request(){
  //   this.router.navigateByUrl("request");
  //  }

}
