import { OverlayModule } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../models/request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {
  request:any;  
  urole:any;

  constructor(private requestservice:RequestService,
    private router:Router) {
      this.urole=localStorage.getItem("role");
      if(this.urole=='manager')
      {
        console.log(this.urole);
        this.requestservice.getAllManager().subscribe(data=>{
          console.log(data);
          this.request=data 
        });
      }
      else if(this.urole=='deptment'){
        console.log(this.urole);
        this.requestservice.getAllHead().subscribe(data=>{
          console.log(data);
           this.request=data 
         });
      }
     }
     
     Ok(e:Request){
       e.managerapp=1;
       this.requestservice.ManagerRequest(e).subscribe(sample=>{
        console.log(sample);
       });
       this.router.navigateByUrl("manager");

     }
     Cancel(e:Request){
      e.managerapp=2;
      this.requestservice.ManagerRequest(e).subscribe(sample=>{
       console.log(sample);
      });
      this.router.navigateByUrl("manager");
     }
  ngOnInit(): void {
  }

}
