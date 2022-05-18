import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  name:any;

  constructor(private userservice:UserService,
    private router:Router,
    private dialogRef:MatDialog) {
    this.name=localStorage.getItem("uname");

    this.user=new User();
   }

  ngOnInit(): void {
  }

  register(){
    this.userservice.addUsers(this.user).subscribe(sample=>{
      console.log(sample);
      if(sample==null)
      {
      alert("Invalid Values");
      this.user=new User();
      }
    });
  }

  noclick(){
    this.dialogRef.closeAll();
   }

}
