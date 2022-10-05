/* NgRx */
import { createAction, props } from '@ngrx/store';

/* Interfaces */
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { IMovieDetails } from 'src/app/shared/interfaces/movie-details.interface';

/* Constants */
import { MoviesConstants } from '../constants/movies.constants';

export class MoviesActions {


  /* --------- Get popular movies ------------------------------------------------------------------------------------------------------- */

  public static getPopularMoviesLoad = createAction(
    MoviesConstants.MOVIES_PAGE_GET_POPULAR_MOVIES_LOAD
  );

  public static getPopularMoviesSuccess = createAction(
    MoviesConstants.MOVIES_PAGE_GET_POPULAR_MOVIES_SUCCESS,
    props<{ movies: IMovie[] }>()
  );

  public static getPopularMoviesError = createAction(
    MoviesConstants.MOVIES_PAGE_GET_POPULAR_MOVIES_ERROR,
    props<{ error: any }>()
  );


  /* --------- Get now playing movies --------------------------------------------------------------------------------------------------- */

  public static getNowPlayingMoviesLoad = createAction(
    MoviesConstants.MOVIES_PAGE_GET_NOW_PLAYING_MOVIES_LOAD
  );

  public static getNowPlayingMoviesSuccess = createAction(
    MoviesConstants.MOVIES_PAGE_GET_NOW_PLAYING_MOVIES_SUCCESS,
    props<{ movies: IMovie[] }>()
  );

  public static getNowPlayingMoviesError = createAction(
    MoviesConstants.MOVIES_PAGE_GET_NOW_PLAYING_MOVIES_ERROR,
    props<{ error: any }>()
  );


  /* --------- Get upcoming movies ------------------------------------------------------------------------------------------------------ */

  public static getUpcomingMoviesLoad = createAction(
    MoviesConstants.MOVIES_PAGE_GET_UPCOMING_MOVIES_LOAD
  );

  public static getUpcomingMoviesSuccess = createAction(
    MoviesConstants.MOVIES_PAGE_GET_UPCOMING_MOVIES_SUCCESS,
    props<{ movies: IMovie[] }>()
  );

  public static getUpcomingMoviesError = createAction(
    MoviesConstants.MOVIES_PAGE_GET_UPCOMING_MOVIES_ERROR,
    props<{ error: any }>()
  );


  /* --------- Get top rated movies ----------------------------------------------------------------------------------------------------- */

  public static getTopRatedMoviesLoad = createAction(
    MoviesConstants.MOVIES_PAGE_GET_TOP_RATED_MOVIES_LOAD
  );

  public static getTopRatedMoviesSuccess = createAction(
    MoviesConstants.MOVIES_PAGE_GET_TOP_RATED_MOVIES_SUCCESS,
    props<{ movies: IMovie[] }>()
  );

  public static getTopRatedMoviesError = createAction(
    MoviesConstants.MOVIES_PAGE_GET_TOP_RATED_MOVIES_ERROR,
    props<{ error: any }>()
  );


  /* --------- Get top rated movies ----------------------------------------------------------------------------------------------------- */

  public static getMovieDetailsLoad = createAction(
    MoviesConstants.MOVIES_PAGE_GET_MOVIE_DETAILS_LOAD,
    props<{ id: number | null }>()
  );

  public static getMovieDetailsSuccess = createAction(
    MoviesConstants.MOVIES_PAGE_GET_MOVIE_DETAILS_SUCCESS,
    props<{ movieDetails: IMovieDetails }>()
  );

  public static getMovieDetailsError = createAction(
    MoviesConstants.MOVIES_PAGE_GET_MOVIE_DETAILS_ERROR,
    props<{ error: any }>()
  );


  /* --------- Clear message ------------------------------------------------------------------------------------------------------------ */

  public static clearMoviesMessage = createAction(
    MoviesConstants.MESSAGES_CLEAR_MOVIES_MESSAGE,
  );
  
}
