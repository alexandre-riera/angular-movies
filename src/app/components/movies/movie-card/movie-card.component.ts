import { Component, OnInit  } from '@angular/core';
import {GetMoviesService} from '../../../services/get-movies.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../class/movie';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit {
  constructor(private _moviesService: GetMoviesService){}

  moviesArray: any = [];
  baseUrlImage: string = "https://image.tmdb.org/t/p/original";
  ngOnInit(){
    this.moviesArray = this._moviesService.getMovies();
  }
}
