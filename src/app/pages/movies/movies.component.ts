/* Angular */
import { Component, OnInit } from '@angular/core';

/* RxJs */
import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import {
  selectPopularMovies,
  selectLoadingPopularMovies,
  selectNowPlayingMovies,
  selectLoadingNowPlayingMovies,
  selectUpcomingMovies,
  selectLoadingUpcomingMovies,
  selectTopRatedMovies,
  selectLoadingTopRatedMovies
} from 'src/app/state/selectors/movies.selectors';

/* Services */
import { MoviesService } from 'src/app/shared/services/movies.service';

/* Models */
import { Movie } from 'src/app/shared/models/movie.model';

/* Interfaces */
import { IAppState } from 'src/app/state/interfaces/app-state.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public popularMovies$: Observable<Movie[]> = new Observable();
  public loadingPopular$: Observable<boolean> = new Observable();

  public nowPlayingMovies$: Observable<Movie[]> = new Observable();
  public loadingNowPlaying$: Observable<boolean> = new Observable();

  public upcomingMovies$: Observable<Movie[]> = new Observable();
  public loadingUpcoming$: Observable<boolean> = new Observable();

  public topRatedMovies$: Observable<Movie[]> = new Observable();
  public loadingTopRated$: Observable<boolean> = new Observable();

  constructor(
    private moviesService: MoviesService,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.initStoreSelectors();
    this.getMovies();
  }

  private initStoreSelectors(): void {
    this.popularMovies$ = this.store.select(selectPopularMovies);
    this.loadingPopular$ = this.store.select(selectLoadingPopularMovies);
    this.nowPlayingMovies$ = this.store.select(selectNowPlayingMovies);
    this.loadingNowPlaying$ = this.store.select(selectLoadingNowPlayingMovies);
    this.upcomingMovies$ = this.store.select(selectUpcomingMovies);
    this.loadingUpcoming$ = this.store.select(selectLoadingUpcomingMovies);
    this.topRatedMovies$ = this.store.select(selectTopRatedMovies);
    this.loadingTopRated$ = this.store.select(selectLoadingTopRatedMovies);
  }

  private getMovies(): void {
    this.moviesService.getPopularMovies();
    this.moviesService.getNowPlayingMovies();
    this.moviesService.getUpcomingMovies();
    this.moviesService.getTopRatedMovies();
  }

}
