import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  uname:any;

  constructor(private router:Router,
    private dialogRef:MatDialog
    ) {
    this.uname=localStorage.getItem("uname");
   }
   
   openDialog(){
     this.dialogRef.open(LoginComponent);
   }

  ngOnInit(): void {
  }

}
