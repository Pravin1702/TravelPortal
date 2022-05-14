import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  uname:any;

  constructor(private userservice:UserService,
    private router:Router) {
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

}
