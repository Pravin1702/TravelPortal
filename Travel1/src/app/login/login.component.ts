import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;

  constructor(private userservice:UserService,
    private router:Router) {
    this.user=new User();
   }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.userservice.Login(this.user).subscribe(sample=>{
      console.log(sample)
     var usr=sample as User;
     if(usr.role=="admin")
     {
      this.router.navigateByUrl("registere");
     } 
     else{
      this.router.navigateByUrl("request");
     }
    });
  }

  reset(){
    this.user=new User();
  }

}
