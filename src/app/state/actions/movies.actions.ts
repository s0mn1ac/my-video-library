/* NgRx */
import { createAction, props } from '@ngrx/store';

/* Models */
import { Movie } from 'src/app/shared/models/movie.model';

/* Constants */
import { MoviesConstants } from '../constants/movies.constants';


/* --------- Get popular movies --------------------------------------------------------------------------------------------------------- */

export const getPopularMoviesLoad = createAction(
  MoviesConstants.MOVIES_PAGE_GET_POPULAR_MOVIES_LOAD
);

export const getPopularMoviesSuccess = createAction(
  MoviesConstants.MOVIES_PAGE_GET_POPULAR_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);

export const getPopularMoviesError = createAction(
  MoviesConstants.MOVIES_PAGE_GET_POPULAR_MOVIES_ERROR,
  props<{ error: any }>()
);


/* --------- Get now playing movies ----------------------------------------------------------------------------------------------------- */

export const getNowPlayingMoviesLoad = createAction(
  MoviesConstants.MOVIES_PAGE_GET_NOW_PLAYING_MOVIES_LOAD
);

export const getNowPlayingMoviesSuccess = createAction(
  MoviesConstants.MOVIES_PAGE_GET_NOW_PLAYING_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);

export const getNowPlayingMoviesError = createAction(
  MoviesConstants.MOVIES_PAGE_GET_NOW_PLAYING_MOVIES_ERROR,
  props<{ error: any }>()
);


/* --------- Get upcoming movies -------------------------------------------------------------------------------------------------------- */

export const getUpcomingMoviesLoad = createAction(
  MoviesConstants.MOVIES_PAGE_GET_UPCOMING_MOVIES_LOAD
);

export const getUpcomingMoviesSuccess = createAction(
  MoviesConstants.MOVIES_PAGE_GET_UPCOMING_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);

export const getUpcomingMoviesError = createAction(
  MoviesConstants.MOVIES_PAGE_GET_UPCOMING_MOVIES_ERROR,
  props<{ error: any }>()
);


/* --------- Get top rated movies ------------------------------------------------------------------------------------------------------- */

export const getTopRatedMoviesLoad = createAction(
  MoviesConstants.MOVIES_PAGE_GET_TOP_RATED_MOVIES_LOAD
);

export const getTopRatedMoviesSuccess = createAction(
  MoviesConstants.MOVIES_PAGE_GET_TOP_RATED_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);

export const getTopRatedMoviesError = createAction(
  MoviesConstants.MOVIES_PAGE_GET_TOP_RATED_MOVIES_ERROR,
  props<{ error: any }>()
);


/* --------- Clear message -------------------------------------------------------------------------------------------------------------- */

export const clearMoviesMessage = createAction(
  MoviesConstants.MESSAGES_CLEAR_MOVIES_MESSAGE,
);