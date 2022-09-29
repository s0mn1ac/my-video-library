/* Angular */
import { Injectable } from '@angular/core';

/* RxJs */
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getNowPlayingMoviesError,
  getNowPlayingMoviesLoad,
  getNowPlayingMoviesSuccess,
  getPopularMoviesError,
  getPopularMoviesLoad,
  getPopularMoviesSuccess,
  getTopRatedMoviesError,
  getTopRatedMoviesLoad,
  getTopRatedMoviesSuccess,
  getUpcomingMoviesError,
  getUpcomingMoviesLoad,
  getUpcomingMoviesSuccess
} from '../actions/movies.actions';

/* Interfaces */
import { MoviesService } from 'src/app/shared/services/movies.service';

/* Models */
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable()
export class MoviesEffects {

  /* --------- Get popular movies ------------------------------------------------------------------------------------------------------- */

  getPopularMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularMoviesLoad),
      mergeMap(() => this.moviesService.getPopularMoviesReport()
        .pipe(
          map((movies: Movie[]) => (getPopularMoviesSuccess({ movies }))),
          catchError((error) => of(getPopularMoviesError({error})))
        )
      )
    );
  });

  
  /* --------- Get now playing movies --------------------------------------------------------------------------------------------------- */

  getNowPlayingMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getNowPlayingMoviesLoad),
      mergeMap(() => this.moviesService.getNowPlayingMoviesReport()
        .pipe(
          map((movies: Movie[]) => (getNowPlayingMoviesSuccess({ movies }))),
          catchError((error) => of(getNowPlayingMoviesError({error})))
        )
      )
    );
  });

  
  /* --------- Get upcoming movies ------------------------------------------------------------------------------------------------------ */

  getUpcomingMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUpcomingMoviesLoad),
      mergeMap(() => this.moviesService.getUpcomingMoviesReport()
        .pipe(
          map((movies: Movie[]) => (getUpcomingMoviesSuccess({ movies }))),
          catchError((error) => of(getUpcomingMoviesError({error})))
        )
      )
    );
  });


  /* --------- Get top rated movies ----------------------------------------------------------------------------------------------------- */

  getTopRatedMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTopRatedMoviesLoad),
      mergeMap(() => this.moviesService.getTopRatedMoviesReport()
        .pipe(
          map((movies: Movie[]) => (getTopRatedMoviesSuccess({ movies }))),
          catchError((error) => of(getTopRatedMoviesError({error})))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) { }

}
