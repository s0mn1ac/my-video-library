/* Angular */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Environment */
import { environment } from 'src/environments/environment';

/* RxJs */
import { map, Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { MoviesActions } from 'src/app/state/actions/movies.actions';

/* Services */
import { TranslocoService } from '@ngneat/transloco';

/* Interfaces */
import { IMovie } from '../interfaces/movie.interface';

/* Models */
import { Movie } from '../models/movie.model';
import { MovieDetails } from '../models/movie-details.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient,
    private translocoService: TranslocoService,
    private store: Store
  ) { }


  /* --------- Get popular movies ------------------------------------------------------------------------------------------------------- */

  public getPopularMovies(): void {
    this.store.dispatch(MoviesActions.getPopularMoviesLoad())
  }

  public getPopularMoviesReport(page: number = 1): Observable<Movie[]> {
    return this.httpClient
      .get(`${environment.tmdbMovieUrl}/popular?api_key=${environment.tmdbKey}${this.getActiveLang()}&page=${page}&region=ES`)
      .pipe(map((response: any) => response.results.map((movie: IMovie) => new Movie(movie))));
  }


  /* --------- Get now playing movies --------------------------------------------------------------------------------------------------- */

  public getNowPlayingMovies(): void {
    this.store.dispatch(MoviesActions.getNowPlayingMoviesLoad())
  }

  public getNowPlayingMoviesReport(page: number = 1): Observable<Movie[]> {
    return this.httpClient
      .get(`${environment.tmdbMovieUrl}/now_playing?api_key=${environment.tmdbKey}${this.getActiveLang()}&page=${page}&region=ES`)
      .pipe(map((response: any) => response.results.map((movie: IMovie) => new Movie(movie))));
  }


  /* --------- Get upcoming movies ------------------------------------------------------------------------------------------------------ */

  public getUpcomingMovies(): void {
    this.store.dispatch(MoviesActions.getUpcomingMoviesLoad())
  }

  public getUpcomingMoviesReport(page: number = 1): Observable<Movie[]> {
    return this.httpClient
      .get(`${environment.tmdbMovieUrl}/upcoming?api_key=${environment.tmdbKey}${this.getActiveLang()}&page=${page}&region=ES`)
      .pipe(map((response: any) => response.results.map((movie: IMovie) => new Movie(movie))));
  }


  /* --------- Get top rated movies ----------------------------------------------------------------------------------------------------- */

  public getTopRatedMovies(): void {
    this.store.dispatch(MoviesActions.getTopRatedMoviesLoad())
  }

  public getTopRatedMoviesReport(page: number = 1): Observable<Movie[]> {
    return this.httpClient
      .get(`${environment.tmdbMovieUrl}/top_rated?api_key=${environment.tmdbKey}${this.getActiveLang()}&page=${page}&region=ES`)
      .pipe(map((response: any) => response.results.map((movie: IMovie) => new Movie(movie))));
  }


  /* --------- Get movie details -------------------------------------------------------------------------------------------------------- */

  public getMovieDetails(id: number | null): void {
    this.store.dispatch(MoviesActions.getMovieDetailsLoad({ id }))
  }

  public getMovieDetailsReport(id: number | null): Observable<MovieDetails> {
    return this.httpClient
      .get(`${environment.tmdbMovieUrl}/${id}?api_key=${environment.tmdbKey}${this.getActiveLang()}`)
      .pipe(map((response: any) => new MovieDetails(response)));
  }


  /* --------- Private methods ---------------------------------------------------------------------------------------------------------- */

  private getActiveLang(): string {
    return `&language=${this.translocoService.getActiveLang() === 'es' ? 'es-ES' : 'en-US'}`;
  }

}
