/* NgRx */
import { createSelector } from '@ngrx/store';

/* Interfaces */
import { IAppState } from '../interfaces/app-state.interface';
import { IMoviesState } from '../interfaces/movies-state.interface';

export const selectMoviesState = (state: IAppState) => state.movies;


/* --------- Get popular movies --------------------------------------------------------------------------------------------------------- */

export const selectPopularMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.popular
);

export const selectLoadingPopularMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.loadingPopular
);


/* --------- Get now playing movies ----------------------------------------------------------------------------------------------------- */

export const selectNowPlayingMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.nowPlaying
);

export const selectLoadingNowPlayingMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.loadingNowPlaying
);


/* --------- Get upcoming movies -------------------------------------------------------------------------------------------------------- */

export const selectUpcomingMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.upcoming
);

export const selectLoadingUpcomingMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.loadingUpcoming
);


/* --------- Get top rated movies ------------------------------------------------------------------------------------------------------- */

export const selectTopRatedMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.topRated
);

export const selectLoadingTopRatedMovies = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.loadingTopRated
);


/* --------- Message -------------------------------------------------------------------------------------------------------------------- */

export const selectMoviesMessage = createSelector(
  selectMoviesState,
  (state: IMoviesState) => state.message
);
