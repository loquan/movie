import { Component, OnInit } from '@angular/core';
import { MovielistService,MovieStructor } from '../movielist.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  PopularList:MovieStructor[]=[];
  PopularDisplay:MovieStructor[]=[];
  constructor(private _service:MovielistService) { }

  ngOnInit(): void {
    //this._service.getPopular().subscribe(data=>{


      //this.PopularList=data.items;


      this.PopularList  = this._service.PopularDatas;

      for(let q=0;q<this.PopularList.length;q++){



        for(let s=0;s<5;s++)
        {
          let rating=this.PopularList[q].rating;
          if((s+1)<rating)
            this.PopularList[q].stars.color[s]='red';
          else
            this.PopularList[q].stars.color[s]='black';
        }



      }


      this.PopularDisplay=this.PopularList;


    //  })
  }

}
