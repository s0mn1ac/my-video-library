import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { getPopularMoviesLoad } from 'src/app/state/actions/movies.actions';
import { IAppState } from 'src/app/state/interfaces/app-state.interface';
import { environment } from 'src/environments/environment';
import { IMovie } from '../interfaces/movie.interface';
import { IPaginator } from '../interfaces/paginator.interface';
import { Movie } from '../models/movie.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient,
    private translocoService: TranslocoService,
    private store: Store
  ) { }

  public getPopularMovies(): void {
    this.store.dispatch(getPopularMoviesLoad())
  }

  public getPopularMoviesReport(page: number = 1): Observable<Movie[]> {
    return this.httpClient.get(`${environment.tmdbMovieUrl}/popular?api_key=${environment.tmdbKey}${this.getActiveLang()}&page=${page}`)
      .pipe(
        map((response: any) => response.results.map((movie: IMovie) => new Movie(movie)))
      );
  }

  private getActiveLang(): string {
    return `&language=${this.translocoService.getActiveLang() === 'es' ? 'es-ES' : 'en-US'}`;
  }

}
