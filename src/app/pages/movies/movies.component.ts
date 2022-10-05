/* Angular */
import { Component, OnInit } from '@angular/core';

/* RxJs */
import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { MoviesSelectors } from 'src/app/state/selectors/movies.selectors';

/* Services */
import { MoviesService } from 'src/app/shared/services/movies.service';

/* Interfaces */
import { IAppState } from 'src/app/state/interfaces/app-state.interface';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public popularMovies$: Observable<IMovie[]> = new Observable<IMovie[]>();
  public loadingPopular$: Observable<boolean> = new Observable();

  public nowPlayingMovies$: Observable<IMovie[]> = new Observable<IMovie[]>();
  public loadingNowPlaying$: Observable<boolean> = new Observable();

  public upcomingMovies$: Observable<IMovie[]> = new Observable<IMovie[]>();
  public loadingUpcoming$: Observable<boolean> = new Observable();

  public topRatedMovies$: Observable<IMovie[]> = new Observable<IMovie[]>();
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
    this.popularMovies$ = this.store.select(MoviesSelectors.selectPopularMovies);
    this.loadingPopular$ = this.store.select(MoviesSelectors.selectLoadingPopularMovies);
    this.nowPlayingMovies$ = this.store.select(MoviesSelectors.selectNowPlayingMovies);
    this.loadingNowPlaying$ = this.store.select(MoviesSelectors.selectLoadingNowPlayingMovies);
    this.upcomingMovies$ = this.store.select(MoviesSelectors.selectUpcomingMovies);
    this.loadingUpcoming$ = this.store.select(MoviesSelectors.selectLoadingUpcomingMovies);
    this.topRatedMovies$ = this.store.select(MoviesSelectors.selectTopRatedMovies);
    this.loadingTopRated$ = this.store.select(MoviesSelectors.selectLoadingTopRatedMovies);
  }

  private getMovies(): void {
    this.moviesService.getPopularMovies();
    this.moviesService.getNowPlayingMovies();
    this.moviesService.getUpcomingMovies();
    this.moviesService.getTopRatedMovies();
  }

}
