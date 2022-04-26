import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import populardata from '../app/json/popular-movies.json';
import trendingdata from '../app/json/trending-movies.json';


export interface ReviewStruct{
  author: string,
  published_on: string,
  review: string
  rating: number
};

export interface MovieStructor{

  id: number,
  name: string,
  cover: string,
  rating: number,
  reviews:ReviewStruct[],
  stars:{color:string[]}
}
export interface MovieStruct {
  id: string;
  rank: number;
  title: string;
  fullTitle: string;
  year: number;
  image: string;
  crew: string;
  imDbRating: number;
  stars:{color:string[]}
  imDbRatingCount: number;
  reviews:ReviewStruct[]


};

export interface MovieData{
  items:MovieStruct[];
};

@Injectable({
  providedIn: 'root'
})

export class MovielistService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  PopularDatas: MovieStructor[] = populardata;
  TrendingDatas: MovieStructor[] = trendingdata;

  PopularData : MovieStruct[]=[{
    id: "tt0303461",
    rank: 26,
    title: "Firefly",
    fullTitle: "Firefly (2002)",
    year: 2002,
    image: "https://imdb-api.com/images/original/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_Ratio0.6716_AL_.jpg",
    crew: "Nathan Fillion, Gina Torres",
    imDbRating: 8.9,
    imDbRatingCount: 259391,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt1806234",
    rank: 27,
    title: "Human Planet",
    fullTitle: "Human Planet (2011)",
    year: 2011,
    image: "https://imdb-api.com/images/original/MV5BMjdhZjQzYjYtM2FmNS00Y2ExLThjODEtZGQzY2M3OWYzYzc0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7015_AL_.jpg",
    crew: "John Hurt, Roger Munns",
    imDbRating: 8.9,
    imDbRatingCount: 25924,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt0386676",
    rank: 28,
    title: "The Office",
    fullTitle: "The Office (2005)",
    year: 2005,
    image: "https://imdb-api.com/images/original/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6716_AL_.jpg",
    crew: "Steve Carell, Jenna Fischer",
    imDbRating: 8.9,
    imDbRatingCount: 536411,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt2560140",
    rank: 29,
    title: "Attack on Titan",
    fullTitle: "Attack on Titan (2013)",
    year: 2013,
    image: "https://imdb-api.com/images/original/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_Ratio0.6716_AL_.jpg",
    crew: "Josh Grelle, Yûki Kaji",
    imDbRating: 8.9,
    imDbRatingCount: 341538,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt2092588",
    rank: 30,
    title: "Frozen Planet",
    fullTitle: "Frozen Planet (2011)",
    year: 2011,
    image: "https://imdb-api.com/images/original/MV5BOGM5YWU2N2QtYjVhZi00MzYyLTk0ODctYmVlNDZlMjU5N2Q5XkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_Ratio0.6716_AL_.jpg",
    crew: "David Attenborough, Alec Baldwin",
    imDbRating: 8.9,
    imDbRatingCount: 29889,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt0877057",
    rank: 31,
    title: "Death Note",
    fullTitle: "Death Note (2006)",
    year: 2006,
    image: "https://imdb-api.com/images/original/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_Ratio0.6716_AL_.jpg",
    crew: "Mamoru Miyano, Brad Swaile",
    imDbRating: 8.9,
    imDbRatingCount: 300268,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt9735318",
    rank: 32,
    title: "The Beatles: Get Back",
    fullTitle: "The Beatles: Get Back (2021)",
    year: 2021,
    image: "https://imdb-api.com/images/original/MV5BNjMxMjE5ZTEtMjgyOC00ODM4LWJjZDAtMjcwZDBlNzZhZTkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6716_AL_.jpg",
    crew: "The Beatles, John Lennon",
    imDbRating: 8.9,
    imDbRatingCount: 19234,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt2356777",
    rank: 33,
    title: "True Detective",
    fullTitle: "True Detective (2014)",
    year: 2014,
    image: "https://imdb-api.com/images/original/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_Ratio0.7015_AL_.jpg",
    crew: "Vince Vaughn, Colin Farrell",
    imDbRating: 8.9,
    imDbRatingCount: 544905,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt0081912",
    rank: 34,
    title: "Only Fools and Horses",
    fullTitle: "Only Fools and Horses (1981)",
    year: 1981,
    image: "https://imdb-api.com/images/original/MV5BYmI1NGIwNzYtOTVlMS00ZGYwLWE0ZTktYzVmMGVlMmRmN2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7015_AL_.jpg",
    crew: "David Jason, Nicholas Lyndhurst",
    imDbRating: 8.9,
    imDbRatingCount: 50359,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt0098904",
    rank: 35,
    title: "Seinfeld",
    fullTitle: "Seinfeld (1989)",
    year: 1989,
    image: "https://imdb-api.com/images/original/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7015_AL_.jpg",
    crew: "Jerry Seinfeld, Julia Louis-Dreyfus",
    imDbRating: 8.9,
    imDbRatingCount: 301173,
    stars:{color:[]},
    reviews: []
    },
    {
    id: "tt0098769",
    rank: 36,
    title: "The Civil War",
    fullTitle: "The Civil War (1990)",
    year: 1990,
    image: "https://imdb-api.com/images/original/MV5BYTM5MTQyY2ItNjkzYS00OTQzLWFkM2MtMTU3YmYxNDcyNjVmXkEyXkFqcGdeQXVyMTEyMjc0ODY5._V1_Ratio0.6716_AL_.jpg",
    crew: "David McCullough, Sam Waterston",
    imDbRating: 8.9,
    imDbRatingCount: 16014,
    stars:{color:[]},
    reviews: []
    }];

  TrendingData : MovieStruct[] =
  [{
  id: "tt5491994",
  rank: 1,
  title: "Planet Earth II",
  fullTitle: "Planet Earth II (2016)",
  year: 2016,
  image: "https://imdb-api.com/images/original/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_Ratio0.6716_AL_.jpg",
  crew: "David Attenborough, Gordon Buchanan",
  imDbRating: 9.4,
  stars:{color:[]},
  imDbRatingCount: 126660,
  reviews:[{
    author: "John Kramer",
    published_on: "2021-11-18 11:37:19",
    review: "Awesome movie!",
    rating: 4.5
  },
  {
    author: "Harry Potter",
    published_on: "2021-10-13 10:16:39",
    review: "Nice movie to watch in theatre!",
    rating: 4.0
  }],
  },
  {
  id: "tt0903747",
  rank: 2,
  title: "Breaking Bad",
  fullTitle: "Breaking Bad (2008)",
  year: 2008,
  image: "https://imdb-api.com/images/original/MV5BNGVlZDhiYmItOTYyNi00YjU3LTllYWEtZjgwOTY3NDcwOWJmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.6716_AL_.jpg",
  crew: "Bryan Cranston, Aaron Paul",
  imDbRating: 9.4,
  stars:{color:[]},
  imDbRatingCount: 1716081,
  reviews: [{
    author: "Ron Weasley",
    published_on: "2021-10-11 11:57:39",
    review: "Good but confusing",
    rating: 4.0
  }
  ]
  },
  {
  id: "tt0795176",
  rank: 3,
  title: "Planet Earth",
  fullTitle: "Planet Earth (2006)",
  year: 2006,
  image: "https://imdb-api.com/images/original/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_Ratio0.6716_AL_.jpg",
  crew: "Sigourney Weaver, David Attenborough",
  imDbRating: 9.4,
  stars:{color:[]},
  imDbRatingCount: 193626,
  reviews: [
  ]
  },
  {
  id: "tt0185906",
  rank: 4,
  title: "Band of Brothers",
  fullTitle: "Band of Brothers (2001)",
  year: 2001,
  image: "https://imdb-api.com/images/original/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_Ratio0.6716_AL_.jpg",
  crew: "Scott Grimes, Damian Lewis",
  imDbRating: 9.4,
  stars:{color:[]},
  imDbRatingCount: 436977,
  reviews: [
  ]

  },
  {
  id: "tt7366338",
  rank: 5,
  title: "Chernobyl",
  fullTitle: "Chernobyl (2019)",
  year: 2019,
  image: "https://imdb-api.com/images/original/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6716_AL_.jpg",
  crew: "Jessie Buckley, Jared Harris",
  imDbRating: 9.3,
  stars:{color:[]},
  imDbRatingCount: 687908,
  reviews: [
  ]

  },
  {
  id: "tt0306414",
  rank: 6,
  title: "The Wire",
  fullTitle: "The Wire (2002)",
  year: 2002,
  image: "https://imdb-api.com/images/original/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.6716_AL_.jpg",
  crew: "Dominic West, Lance Reddick",
  imDbRating: 7.3,
  stars:{color:[]},
  imDbRatingCount: 323999,
  reviews: [
  ]

  },
  {
  id: "tt6769208",
  rank: 7,
  title: "Blue Planet II",
  fullTitle: "Blue Planet II (2017)",
  year: 2017,
  image: "https://imdb-api.com/images/original/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7015_AL_.jpg",
  crew: "David Attenborough, Peter Drost",
  imDbRating: 7.2,
  stars:{color:[]},
  imDbRatingCount: 39369,
  reviews: [
  ]

  },
  {
  id: "tt0417299",
  rank: 8,
  title: "Avatar: The Last Airbender",
  fullTitle: "Avatar: The Last Airbender (2005)",
  year: 2005,
  image: "https://imdb-api.com/images/original/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_Ratio0.6716_AL_.jpg",
  crew: "Dee Bradley Baker, Zach Tyler Eisen",
  imDbRating: 6.2,
  stars:{color:[]},
  imDbRatingCount: 295931,
  reviews: [
  ]

  },
  {
  id: "tt2395695",
  rank: 9,
  title: "Cosmos: A Spacetime Odyssey",
  fullTitle: "Cosmos: A Spacetime Odyssey (2014)",
  year: 2014,
  image: "https://imdb-api.com/images/original/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6716_AL_.jpg",
  crew: "Neil deGrasse Tyson, Christopher Emerson",
  imDbRating:5.2,
  stars:{color:[]},
  imDbRatingCount: 119239,
  reviews: [
  ]

  },
  {
  id: "tt0141842",
  rank: 10,
  title: "The Sopranos",
  fullTitle: "The Sopranos (1999)",
  year: 1999,
  image: "https://imdb-api.com/images/original/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7015_AL_.jpg",
  crew: "James Gandolfini, Lorraine Bracco",
  imDbRating: 4.2,
  stars:{color:[]},
  imDbRatingCount: 370716,
  reviews: [
  ]

  },
  {
  id: "tt9253866",
  rank: 11,
  title: "Our Planet",
  fullTitle: "Our Planet (2019)",
  year: 2019,
  image: "https://imdb-api.com/images/original/MV5BN2I1ZjA5YjQtYmQ0ZS00ZmE1LTk1ZjktNTQ5ODIzY2JiZDdhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_Ratio0.6716_AL_.jpg",
  crew: "David Attenborough",
  imDbRating:2.2,
  stars:{color:[]},
  imDbRatingCount: 41323,
  reviews: [
  ]

  },
  {
  id: "tt0081846",
  rank: 12,
  title: "Cosmos",
  fullTitle: "Cosmos (1980)",
  year: 1980,
  image: "https://imdb-api.com/images/original/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7015_AL_.jpg",
  crew: "Carl Sagan, Jaromír Hanzlík",
  imDbRating: 3.2,
  stars:{color:[]},
  imDbRatingCount: 40237,
  reviews: [
  ]

  },
  {
  id: "tt0944947",
  rank: 13,
  title: "Game of Thrones",
  fullTitle: "Game of Thrones (2011)",
  year: 2011,
  image: "https://imdb-api.com/images/original/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7313_AL_.jpg",
  crew: "Emilia Clarke, Peter Dinklage",
  imDbRating: 9.2,
  stars:{color:[]},
  imDbRatingCount: 1977648,
  reviews: [
  ]

  },
  {
  id: "tt2861424",
  rank: 14,
  title: "Rick and Morty",
  fullTitle: "Rick and Morty (2013)",
  year: 2013,
  image: "https://imdb-api.com/images/original/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_Ratio0.6716_AL_.jpg",
  crew: "Justin Roiland, Chris Parnell",
  imDbRating: 9.1,
  stars:{color:[]},
  imDbRatingCount: 471653,
  reviews: [
  ]


  },
  {
  id: "tt0071075",
  rank: 15,
  title: "The World at War",
  fullTitle: "The World at War (1973)",
  year: 1973,
  image: "https://imdb-api.com/images/original/MV5BYzExN2NhZDctOWEzMy00NzYwLTg3MDktNjYyNTQyOWY4MGYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7015_AL_.jpg",
  crew: "Laurence Olivier, Albert Speer",
  imDbRating: 9.1,
  stars:{color:[]},
  imDbRatingCount: 25061,
  reviews: [
  ]

  },
  {
  id: "tt1355642",
  rank:16,
  title: "Fullmetal Alchemist: Brotherhood",
  fullTitle: "Fullmetal Alchemist: Brotherhood (2009)",
  year: 2009,
  image: "https://imdb-api.com/images/original/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7015_AL_.jpg",
  crew: "Kent Williams, Iemasa Kayumi",
  imDbRating: 9.1,
  stars:{color:[]},
  imDbRatingCount: 155461,
  reviews: []

  }

  ];



  constructor(private http: HttpClient) { }

 getTop(){

   return this.http.get<MovieData>('https://imdb-api.com/en/API/Top250TVs/k_57v1ddb0',this.httpOptions) ;

   //return this.TrendingData;
 }
 getPopular(){

   return this.http.get<MovieData>('https://imdb-api.com/en/API/MostPopularTVs/k_57v1ddb0',this.httpOptions) ;
   //return this.TrendingData;
  }
}
