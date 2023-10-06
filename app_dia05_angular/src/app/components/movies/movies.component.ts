import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  //Inyectamos el servicio creado para poder utilizarlo
  constructor(private movieService: MovieService) {
  }
  ngOnInit(): void {

  }
  //Creamos un metodo observable
  getMovies(searchTerm: string) {
    this.movieService.getMovies(searchTerm).subscribe(data => {
      if (data.Response == 'False') {
        this.movies = [];
      } else {
        this.movies = data.Search;
      }
    })
  }



}
