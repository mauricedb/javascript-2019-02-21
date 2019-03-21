import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    // this.moviesService.getMovies().subscribe(movies => {
    //   this.movies = movies;
    // });

    // console.table(this.movies);

    this.movies = this.moviesService.getMovies();
  }
}
