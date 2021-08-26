import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpServiceService } from '../../user-http-service.service';
 
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router:Router, private service:UserHttpServiceService) { }

  ngOnInit(): void {
  }

  public async httpRequest(){
    const query = await this.service.login({user: "jony", password: "jony123"});
    const token = query.data.token;
    localStorage.setItem("token", token);
  }
  public async httpRequestUsers(){
    const query = await this.service.getUsers({});
    const users = query.data.data.data;  }

}
