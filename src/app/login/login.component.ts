import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovielistService } from '../movielist.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:MovielistService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.service.loginObject.login=true;
    this.router.navigateByUrl("/home");
  }

}
