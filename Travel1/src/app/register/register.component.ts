import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register;
  constructor(private userservice:UserService) { 
    this.register=new Register();
  }
  insertEmp(){
   this.userservice.addUsers(this.register).subscribe(e=>{
     console.log(e);
   });
   this.register=new Register();
   }

  ngOnInit(): void {
  }

}
