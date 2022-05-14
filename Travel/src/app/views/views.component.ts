import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  views:any;

  constructor(private userservice:UserService) {
  
    userservice.getviews().subscribe(data=>{
      console.log(data);
      this.views=data 
    });
   }

  ngOnInit(): void {
  }

}
