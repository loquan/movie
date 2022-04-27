import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MovielistService,loginObject } from './movielist.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,OnChanges{
  title = 'movie';
  logoutMenu:loginObject={login:true};
  constructor(private service:MovielistService,private route:Router) {

    this.logoutMenu=this.service.loginObject;
    if(this.logoutMenu.login){
      this.route.navigateByUrl('/home');

    }else{
      this.route.navigateByUrl('/login');

    }

  }
 ngOnInit(): void {

 }
 ngOnChanges(changes: SimpleChanges): void {

 }
 logout(){

  this.service.loginObject.login=false;
  this.route.navigateByUrl('/login');

 }
}
