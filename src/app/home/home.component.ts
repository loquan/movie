import { Component, OnInit } from '@angular/core';
import { MovielistService,MovieStruct } from '../movielist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    console.log("home");

  }

}
