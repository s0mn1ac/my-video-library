/* Angular */
import { Injectable } from '@angular/core';

/* RxJs */
import { of, map, mergeMap, catchError } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesActions } from '../actions/movies.actions';

/* Interfaces */
import { MoviesService } from 'src/app/shared/services/movies.service';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { IMovieDetails } from 'src/app/shared/interfaces/movie-details.interface';

@Injectable()
export class MoviesEffects {


  /* --------- Get popular movies ------------------------------------------------------------------------------------------------------- */

  getPopularMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.getPopularMoviesLoad),
      mergeMap(() => this.moviesService.getPopularMoviesReport()
        .pipe(
          map((movies: IMovie[]) => (MoviesActions.getPopularMoviesSuccess({ movies }))),
          catchError((error) => of(MoviesActions.getPopularMoviesError({error})))
        )
      )
    );
  });

  
  /* --------- Get now playing movies --------------------------------------------------------------------------------------------------- */

  getNowPlayingMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.getNowPlayingMoviesLoad),
      mergeMap(() => this.moviesService.getNowPlayingMoviesReport()
        .pipe(
          map((movies: IMovie[]) => (MoviesActions.getNowPlayingMoviesSuccess({ movies }))),
          catchError((error) => of(MoviesActions.getNowPlayingMoviesError({error})))
        )
      )
    );
  });

  
  /* --------- Get upcoming movies ------------------------------------------------------------------------------------------------------ */

  getUpcomingMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.getUpcomingMoviesLoad),
      mergeMap(() => this.moviesService.getUpcomingMoviesReport()
        .pipe(
          map((movies: IMovie[]) => (MoviesActions.getUpcomingMoviesSuccess({ movies }))),
          catchError((error) => of(MoviesActions.getUpcomingMoviesError({error})))
        )
      )
    );
  });


  /* --------- Get top rated movies ----------------------------------------------------------------------------------------------------- */

  getTopRatedMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.getTopRatedMoviesLoad),
      mergeMap(() => this.moviesService.getTopRatedMoviesReport()
        .pipe(
          map((movies: IMovie[]) => (MoviesActions.getTopRatedMoviesSuccess({ movies }))),
          catchError((error) => of(MoviesActions.getTopRatedMoviesError({error})))
        )
      )
    );
  });


  /* --------- Get movie details -------------------------------------------------------------------------------------------------------- */

  getMovieDetailsLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.getMovieDetailsLoad),
      mergeMap((props) => this.moviesService.getMovieDetailsReport(props.id)
        .pipe(
          map((movieDetails: IMovieDetails) => (MoviesActions.getMovieDetailsSuccess({ movieDetails }))),
          catchError((error) => of(MoviesActions.getMovieDetailsError({error})))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) { }

}
