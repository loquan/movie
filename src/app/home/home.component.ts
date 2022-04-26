import { Component, OnInit,OnChanges } from '@angular/core';
import { MovielistService,MovieStruct } from '../movielist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit,OnChanges {

  movieShow:boolean=false;
  movieId:number=0;
  type:string="";
  constructor() { }

  ngOnInit(): void {
    console.log("home");

  }

  ngOnChanges(){
     console.log("type"+this.type);
     console.log("type"+this.movieId);
  }
}
