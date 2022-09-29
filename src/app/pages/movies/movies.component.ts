import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { IAppState } from 'src/app/state/interfaces/app-state.interface';
import { selectMovies } from 'src/app/state/selectors/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies$: Observable<Movie[]> = new Observable();

  constructor(
    private moviesService: MoviesService,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    console.log('LOAD MOVIES')
    this.initStoreSelectors();
    this.getPopularMovies();
  }

  private initStoreSelectors(): void {
    this.movies$ = this.store.select(selectMovies);
  }

  private getPopularMovies(): void {
    this.moviesService.getPopularMovies();
  }

}
