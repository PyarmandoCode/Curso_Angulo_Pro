import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit {

  private API_URL: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=218ec709'

  constructor(private http: HttpClient) { }
  getMovies(searchTerm: string): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${searchTerm}`);
  }

  ngOnInit(): void {

  }
}
