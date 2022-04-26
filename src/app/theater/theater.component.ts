import { Component, OnInit } from '@angular/core';
import { MovielistService, MovieStructor } from '../movielist.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  TheaterList:MovieStructor[]=[];
  TheaterListDisplay:MovieStructor[][]=[];
  TrendingDisplayAll:MovieStructor[][]=[];
  constructor(private service:MovielistService,private router:Router) { }

  ngOnInit(): void {
    console.log("trending");

        this.TheaterList  = this.service.TheaterDatas;


        for(let q=0;q<this.TheaterList.length;q++){

          this.TheaterList[q].stars={ color:['black','black','black','black','black',]}
          for(let s=0;s<5;s++)
          {
            let rating=this.TheaterList[q].rating;

            if((s+1)<rating)
              this.TheaterList[q].stars.color[s]='red';
            else
              this.TheaterList[q].stars.color[s]='black';
          }



        }



        this.TheaterListDisplay[0]=this.TheaterList.slice(0,6);

  }
  selectId(id:number){




    this.router.navigateByUrl('/movie?type=theater&id='+id);


  }

}
