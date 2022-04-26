import { Component, OnInit } from '@angular/core';
import { MovielistService,MovieStructor } from '../movielist.service';
import { Input,Output, EventEmitter  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  PopularList:MovieStructor[]=[];
  PopularDisplay:MovieStructor[]=[];

  @Input() movie:boolean=false;
  @Output() movieChange = new EventEmitter<boolean>();
  @Output() movieId = new EventEmitter<number>();
  @Output() movieType = new EventEmitter<string>();

  constructor(private _service:MovielistService,private router:Router) { }


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

  selectId(id:number){

    this.router.navigateByUrl('/movie?type=popular&id='+id);
    this.movieId.emit(id);
    this.movieType.emit("popular");
    this.movieChange.emit(true);
  }

}
