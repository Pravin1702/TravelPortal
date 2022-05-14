import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-approvel',
  templateUrl: './approvel.component.html',
  styleUrls: ['./approvel.component.css']
})
export class ApprovelComponent implements OnInit {
views:any;
role:any;
  constructor(private requestservice:RequestService) {
    this.role=localStorage.getItem("role");
    if(this.role=='manager'){
      requestservice.getAllManager().subscribe(data=>{
        console.log(data);
        this.views=data 
      });
    }
    else if(this.role=='department'){
      requestservice.getAllHead().subscribe(data=>{
        console.log(data);
        this.views=data 
      });
    }
    else if(this.role=='facility'){
      requestservice.getAllFacility().subscribe(data=>{
        console.log(data);
        this.views=data 
      });
    }
    else if(this.role=='hr'){
      requestservice.getAllEmployee().subscribe(data=>{
        console.log(data);
        this.views=data 
      });
      
    }
    else{
      requestservice.getAllEmployee().subscribe(data=>{
        console.log(data);
        this.views=data 
      });
    }
    
   }
   

  ngOnInit(): void {
  }

}
