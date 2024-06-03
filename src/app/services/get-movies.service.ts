import { Injectable, OnInit  } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import { Movie } from '../class/movie';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor() { }

  url: string = environment.baseUrl;
  apiKey: string = environment.apiKey;

  getMovies(){
    let result: any = [];
    fetch(this.url, {
      method: 'GET',
      headers: {
        'Authorization': "Bearer " + this.apiKey
      }
    })
    .then((response) => response.json())
    .then((moviesData) => (result.push(moviesData.results)));
 
    return result;
    
  }
}
