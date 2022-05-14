import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable()

export class UserService{
    constructor(private httpClient:HttpClient){
    }

    Login(user:User){
        return this.httpClient.post("http://localhost:54465/api/User/Login",user);
    }

    addUsers(register:User){
        return this.httpClient.post("http://localhost:54465/api/User/Register",register);
     }
     getviews(){
         return this.httpClient.get("http://localhost:54465/api/User/GetAll_Employees");
     }

}