import { Component, OnInit, OnChanges } from '@angular/core';
import { Input,Output, EventEmitter  } from '@angular/core';
import { MovielistService,MovieStructor,ReviewStruct } from '../movielist.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent implements OnInit, OnChanges {

  color:string[]=['black','black','black','black','black'];
  review:ReviewStruct={ author: "",
                        published_on: "",
                        review: "",
                        rating: 0,


  };

  reviewData:string="";
  name:string="";
  colorsClass:string[]=['bi bi-heart','bi bi-heart','bi bi-heart','bi bi-heart','bi bi-heart',];
  ratingValue:number=0;

  MovieData:MovieStructor={  id: 0,
  name: "",
  cover: "",
  rating: 0,
  reviews: []  ,
  stars:{color:['black','black','black','black','black']}
  };





  movieId:number=0;
  movieType:string="";




  constructor(private _service:MovielistService,private activeRoute:ActivatedRoute,private _route:Router) { }

  ngOnInit(): void {
      this.movieType=this.activeRoute.snapshot.queryParams['type'];
      this.movieId=this.activeRoute.snapshot.queryParams['id'];
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

      }else if (this.movieType=="theater"){


        for(let i=0;i<this._service.TheaterDatas.length;i++)
        {
           if( this._service.TheaterDatas[i].id==this.movieId)
           {
             this.MovieData =this._service.TheaterDatas[i];
           }

        }

     }

      if(this.MovieData!=null)
      {
        for(let s=0;s<5;s++)
        {
          let rating=this.MovieData.rating;

          if((s+1)<rating)
           this.MovieData.stars.color[s]='red';
          else
            this.MovieData.stars.color[s]='black';
        }

        if(this.MovieData.reviews.length>0)
        {



          this.MovieData.reviews.forEach( data=>{

                let color:string[]=['red','red','red','red'];
                for(let k=0;k<5;k++)
                   if((k+1)<data.rating)
                    color[k]='red';
                   else
                    color[k]='black'
                let stars:any={color};
                data.stars=stars;


          } )


        }

      }

  }
  ngOnChanges(){




  }

  rating(index:number){


    this.ratingValue=index+1;
    for(let s=0;s<5;s++)
    {
      if((s)<=index)
       this.colorsClass[s]='bi bi-heart-fill';
      else
        this.colorsClass[s]='bi bi-heart';
    }

  }

  saveData(){
    console.log(this.name);
    console.log(this.reviewData);



      let color:string[]=[];
      for(let k=0;k<5;k++)
      {
         if((k)< this.ratingValue)
          color[k]='red';
         else
          color[k]='black';

      }




    this.review={
      author: this.name,
      published_on: ""+Date.now(),
      review: this.reviewData,
      rating: this.ratingValue,
      stars:{color:color}

    }

    this.MovieData.reviews.push(this.review);
    console.log("done");
  }

  close(){
    this._route.navigateByUrl('/home');

  }

}
