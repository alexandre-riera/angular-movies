import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieCardComponent} from '../app/components/movies/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
