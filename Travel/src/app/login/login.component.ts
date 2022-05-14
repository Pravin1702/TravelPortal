import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  uname:any;

  constructor(private loginService:UserService,
    private router:Router,
    private dialogRef:MatDialog) {
    this.user=new User();
   }

  ngOnInit(): void {
  }

  login(){
      this.dialogRef.closeAll();
      this.loginService.Login(this.user).subscribe(sample=>{
      console.log(sample);
      if(sample==null)
      {
      alert("Invalid Username or Password");
      this.user=new User();
      }
      else{
      var usr=sample as User;
      if(usr.role=='employee')
      {
      alert("Welcome "+usr.name);
      localStorage.setItem("id",JSON.stringify(usr.employeeId));
      localStorage.setItem("uname",usr.name);
      localStorage.setItem("email",usr.email);
      localStorage.setItem("role",usr.role);
      localStorage.setItem("region",usr.address);
      localStorage.setItem("mid",JSON.stringify(usr.managerId));
      localStorage.setItem("age",JSON.stringify(usr.age));
      localStorage.setItem("mob",JSON.stringify(usr.mobile));
      localStorage.setItem("dob",JSON.stringify(usr.birthday));
      this.router.navigateByUrl("employee");
      }
      else if(usr.role=='manager')
      {
        alert("Welcome "+usr.name);
        localStorage.setItem("id",JSON.stringify(usr.employeeId));
        localStorage.setItem("uname",usr.name);
        localStorage.setItem("email",usr.email);
        localStorage.setItem("role",usr.role);
        localStorage.setItem("region",usr.address);
        localStorage.setItem("mid",JSON.stringify(usr.managerId));
        localStorage.setItem("age",JSON.stringify(usr.age));
        localStorage.setItem("mob",JSON.stringify(usr.mobile));
        localStorage.setItem("dob",JSON.stringify(usr.birthday));

        this.router.navigateByUrl("manager");
      }
      else if(usr.role=='hr')
      {
        alert("Welcome "+usr.name);
        localStorage.setItem("id",JSON.stringify(usr.employeeId));
        localStorage.setItem("uname",usr.name);
        localStorage.setItem("email",usr.email);
        localStorage.setItem("role",usr.role);
        localStorage.setItem("region",usr.address);
        localStorage.setItem("mid",JSON.stringify(usr.managerId));
        localStorage.setItem("age",JSON.stringify(usr.age));
        localStorage.setItem("mob",JSON.stringify(usr.mobile));
        localStorage.setItem("dob",JSON.stringify(usr.birthday));
        
        this.router.navigateByUrl("hr");
      }
      else if(usr.role=='deptment')
      {
        alert("Welcome "+usr.name);
        localStorage.setItem("id",JSON.stringify(usr.employeeId));
        localStorage.setItem("uname",usr.name);
        localStorage.setItem("email",usr.email);
        localStorage.setItem("role",usr.role);
        localStorage.setItem("region",usr.address);
        localStorage.setItem("mid",JSON.stringify(usr.managerId));
        localStorage.setItem("age",JSON.stringify(usr.age));
        localStorage.setItem("mob",JSON.stringify(usr.mobile));
        localStorage.setItem("dob",JSON.stringify(usr.birthday));
        
        this.router.navigateByUrl("register");
      }
      else
      {
        alert("Welcome "+usr.name);
        localStorage.setItem("id",JSON.stringify(usr.employeeId));
        localStorage.setItem("uname",usr.name);
        localStorage.setItem("email",usr.email);
        localStorage.setItem("role",usr.role);
        localStorage.setItem("region",usr.address);
        localStorage.setItem("mid",JSON.stringify(usr.managerId));
        localStorage.setItem("age",JSON.stringify(usr.age));
        localStorage.setItem("mob",JSON.stringify(usr.mobile));
        localStorage.setItem("dob",JSON.stringify(usr.birthday));
        
        this.router.navigateByUrl("facility");
      }
    }
    });
    
  }

  reset(){
    this.user=new User();
  }

}
