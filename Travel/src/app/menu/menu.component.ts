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
  role:any;

  constructor(private router:Router,
    private dialogRef:MatDialog
    ) {
    this.role=localStorage.getItem("role");
    if(this.role=='employee')
    {
      this.router.navigateByUrl("employee");
    }
    else if(this.role=='hr')
    {
      this.router.navigateByUrl("hr");
    }
    else if(this.role=='facility')
    {
      this.router.navigateByUrl("facility");
    }
    else if(this.role=='manager')
    {
      this.router.navigateByUrl("manager");
    }
    else if(this.role=='deptment')
    {
      this.router.navigateByUrl("head");
    }
    else{
      this.router.navigateByUrl("");
    }
   }
   
   openDialog(){
     this.dialogRef.open(LoginComponent);
   }

  ngOnInit(): void {
  }

}
