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
    var emp=this.userservice.Login(this.user).subscribe(sample=>{
      console.log(sample)
    });
  }

  reset(){
    this.user=new User();
  }

}
