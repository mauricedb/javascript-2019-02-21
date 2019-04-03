import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getMovies() {
    // return [{ id: 1, title: 'een film' }, { id: 2, title: 'een tweede film' }];
    return this.httpClient.get('http://localhost:3001/movies');
  }
}
