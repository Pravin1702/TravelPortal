import { Injectable } from "@angular/core";
import {HttpClient}from "@angular/common/http";
import { User } from "../Models/user";
import { Register } from "../models/register";

@Injectable()

export class UserService{
    constructor(private httpClient:HttpClient){
    }

    Login(user:User){
        return this.httpClient.post("http://localhost:5154/api/User/Login",user);
    }

    addUsers(register:Register){
        return this.httpClient.post("http://localhost:50586/api/User/Register",register);
     }
 

}