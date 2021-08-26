import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpServiceService } from '../../user-http-service.service';
 

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  usersData:any;

  constructor(private router:Router, private service:UserHttpServiceService) { }


  ngOnInit(): void {
  }

  public async httpRequestUsers(){
    const query = await this.service.getUsers({});
    this.usersData = query.data.data.data;  
  }

}
