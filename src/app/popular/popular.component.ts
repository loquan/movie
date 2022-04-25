import { Component, OnInit } from '@angular/core';
import { MovielistService,MovieStruct } from '../movielist.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  PopularList:MovieStruct[]=[];
  PopularDisplay:MovieStruct[]=[];
  constructor(private _service:MovielistService) { }

  ngOnInit(): void {
    //this._service.getPopular().subscribe(data=>{


      //this.PopularList=data.items;


      this.PopularList  = this._service.PopularData;

      for(let q=0;q<this.PopularList.length;q++){



        for(let s=0;s<10;s++)
        {
          let rating=this.PopularList[q].imDbRating;
          if((s+1)<rating)
            this.PopularList[q].stars.color[s]='red';
          else
            this.PopularList[q].stars.color[s]='black';
        }



      }


      this.PopularDisplay=this.PopularList.slice(0,10);


    //  })
  }

}
