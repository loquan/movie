import { Component, OnInit } from '@angular/core';
import { MovielistService,MovieStruct } from '../movielist.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  TrendingList:MovieStruct[]=[];
  TrendingDisplay:MovieStruct[][]=[];
  TrendingDisplayAll:MovieStruct[][]=[];
  constructor(private service:MovielistService) { }

  ngOnInit(): void {
    console.log("trending");

    //this.service.getTop().subscribe( data=>
      //{
        //this.TrendingList  = data.items;

        this.TrendingList  = this.service.TrendingData;
        let numberRowCal:any= this.TrendingList.length/6;
        let remainder=this.TrendingList.length%6;
        let numberRows = parseInt(numberRowCal);

        for(let q=0;q<this.TrendingList.length;q++){



          for(let s=0;s<10;s++)
          {
            let rating=this.TrendingList[q].imDbRating;
            if((s+1)<rating)
              this.TrendingList[q].stars.color[s]='red';
            else
              this.TrendingList[q].stars.color[s]='black';
          }



        }

        if(remainder>0){
          //numberRows++;
        }

        this.TrendingDisplay[0]=this.TrendingList.slice(0,6);
        this.TrendingDisplay[1]=this.TrendingList.slice(6,12);

        for(let x=0;x<numberRows;x++)
        {
            let end:number;

            if(numberRows==(x+1))
            {

              end=(x)*6+remainder;
            }
            else
              end=(x+1)*6;
            this.TrendingDisplayAll[x]=this.TrendingList.slice(0+(x*6),(x+1)*6);

        }



        console.log("finish trending");
     // }

    //);
  }

}
