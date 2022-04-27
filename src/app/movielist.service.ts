import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import populardata from '../app/json/popular-movies.json';
import trendingdata from '../app/json/trending-movies.json';
import theaterdata from '../app/json/theatre-movies.json';


export interface ReviewStruct{
  author: string,
  published_on: string,
  review: string,
  rating: number,
  stars?:{color:string[]}
};

export interface MovieStructor{

  id: number,
  name: string,
  cover: string,
  rating: number,
  reviews:ReviewStruct[],
  stars:{color:string[]}
}

export interface loginObject{
  login:boolean;
}

@Injectable({
  providedIn: 'root'
})

export class MovielistService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  PopularDatas: MovieStructor[] = populardata;
  TrendingDatas: MovieStructor[] = trendingdata;
  TheaterDatas: MovieStructor[] = theaterdata;
  loginObject:loginObject={login:false};




  constructor(private http: HttpClient) { }


}
