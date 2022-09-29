/* NgRx */
import { createAction, props } from '@ngrx/store';

/* Models */
import { Movie } from 'src/app/shared/models/movie.model';

/* Constants */
import { MoviesConstants } from '../constants/movies.constants';

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
