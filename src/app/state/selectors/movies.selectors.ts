/* NgRx */
import { createSelector } from '@ngrx/store';

/* Interfaces */
import { IAppState } from '../interfaces/app-state.interface';
import { IMoviesState } from '../interfaces/movies-state.interface';

export const selectMoviesState = (state: IAppState) => state.movies;

export const selectMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.movies
);

export const selectMoviesLoading = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.loading
);
