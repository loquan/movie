import { Component, OnInit, OnChanges } from '@angular/core';
import { Input,Output, EventEmitter  } from '@angular/core';
import { MovielistService,MovieStructor,ReviewStruct } from '../movielist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent implements OnInit, OnChanges {


  review:ReviewStruct={ author: "",
                        published_on: "",
                        review: "",
                        rating: 0,
  };

  MovieData:MovieStructor={  id: 0,
  name: "",
  cover: "",
  rating: 0,
  reviews: []  ,
  stars:{color:['black','black','black','black','black']}
  };


  @Input() movieId:number=0;
  @Input() movie:boolean=false;
  @Input() movieType:string="";
  @Output() movieChange = new EventEmitter<boolean>();



  constructor(private _service:MovielistService,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.movieType=this.route.snapshot.queryParams['type'];
      this.movieId=this.route.snapshot.queryParams['id'];
      if(this.movieType=="popular"){
        for(let i=0;i<this._service.PopularDatas.length;i++)
        {
           if( this._service.PopularDatas[i].id==this.movieId)
           {
             this.MovieData =this._service.PopularDatas[i];
           }

        }

      }else if (this.movieType=="trending"){
         this._service.TrendingDatas;

         for(let i=0;i<this._service.TrendingDatas.length;i++)
         {
            if( this._service.TrendingDatas[i].id==this.movieId)
            {
              this.MovieData =this._service.TrendingDatas[i];
            }

         }

      }

  }
  ngOnChanges(){



  }

}
