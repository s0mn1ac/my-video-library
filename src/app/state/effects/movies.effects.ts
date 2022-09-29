/* Angular */
import { Injectable } from '@angular/core';

/* RxJs */
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPopularMoviesError, getPopularMoviesLoad, getPopularMoviesSuccess } from '../actions/movies.actions';

/* Interfaces */
import { MoviesService } from 'src/app/shared/services/movies.service';

/* Models */
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable()
export class MoviesEffects {

  /* --------- Get Popular Movies ------------------------------------------------------------------------------------------------------- */

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

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) { }

}
