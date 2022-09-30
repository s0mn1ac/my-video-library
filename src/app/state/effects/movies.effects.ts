/* Angular */
import { Injectable } from '@angular/core';

/* RxJs */
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesActions } from '../actions/movies.actions';

/* Interfaces */
import { MoviesService } from 'src/app/shared/services/movies.service';

/* Models */
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable()
export class MoviesEffects {

  /* --------- Get popular movies ------------------------------------------------------------------------------------------------------- */

  getPopularMoviesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.getPopularMoviesLoad),
      mergeMap(() => this.moviesService.getPopularMoviesReport()
        .pipe(
          map((movies: Movie[]) => (MoviesActions.getPopularMoviesSuccess({ movies }))),
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
          map((movies: Movie[]) => (MoviesActions.getNowPlayingMoviesSuccess({ movies }))),
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
          map((movies: Movie[]) => (MoviesActions.getUpcomingMoviesSuccess({ movies }))),
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
          map((movies: Movie[]) => (MoviesActions.getTopRatedMoviesSuccess({ movies }))),
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
          map((movie: Movie) => (MoviesActions.getMovieDetailsSuccess({ movie }))),
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
