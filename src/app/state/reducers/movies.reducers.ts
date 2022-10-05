/* NgRx */
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { MoviesActions } from '../actions/movies.actions';

/* Interfaces */
import { IMoviesState } from '../interfaces/movies-state.interface';

/* Enums */
import { MessageType } from 'src/app/shared/enums/message-type.enum';

export const initialState: IMoviesState = {
  movieDetails: null,
  popular: [],
  nowPlaying: [],
  upcoming: [],
  topRated: [],
  latest: [],
  loadingPopular: true,
  loadingNowPlaying: true,
  loadingUpcoming: true,
  loadingTopRated: true,
  loadingLatest: true,
  loadingMovieDetails: true,
  message: null
};

export const moviesReducer: ActionReducer<IMoviesState, Action> = createReducer(
  initialState,
  on(MoviesActions.getPopularMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      popular: [],
      loadingPopular: true
    };
  }),
  on(MoviesActions.getPopularMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      popular: movies,
      loadingPopular: false
    };
  }),
  on(MoviesActions.getPopularMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingPopular: false,
      message: { type: MessageType.Error, key: 'getPopularMoviesError', error }
    };
  }),
  on(MoviesActions.getNowPlayingMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      nowPlaying: [],
      loadingNowPlaying: true
    };
  }),
  on(MoviesActions.getNowPlayingMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      nowPlaying: movies,
      loadingNowPlaying: false
    };
  }),
  on(MoviesActions.getNowPlayingMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingNowPlaying: false,
      message: { type: MessageType.Error, key: 'getNowPlayingMoviesError', error }
    };
  }),
  on(MoviesActions.getUpcomingMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      upcoming: [],
      loadingUpcoming: true
    };
  }),
  on(MoviesActions.getUpcomingMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      upcoming: movies,
      loadingUpcoming: false
    };
  }),
  on(MoviesActions.getUpcomingMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingUpcoming: false,
      message: { type: MessageType.Error, key: 'getUpcomingMoviesError', error }
    };
  }),
  on(MoviesActions.getTopRatedMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      topRated: [],
      loadingTopRated: true
    };
  }),
  on(MoviesActions.getTopRatedMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      topRated: movies,
      loadingTopRated: false
    };
  }),
  on(MoviesActions.getTopRatedMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingTopRated: false,
      message: { type: MessageType.Error, key: 'getTopRatedMoviesError', error }
    };
  }),
  on(MoviesActions.getMovieDetailsLoad, (state): IMoviesState => {
    return {
      ...state,
      movieDetails: null,
      loadingMovieDetails: true
    };
  }),
  on(MoviesActions.getMovieDetailsSuccess, (state, { movieDetails }): IMoviesState => {
    return {
      ...state,
      movieDetails: movieDetails,
      loadingMovieDetails: false
    };
  }),
  on(MoviesActions.getMovieDetailsError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingMovieDetails: false,
      message: { type: MessageType.Error, key: 'getMovieDetailsError', error }
    };
  }),
  on(MoviesActions.clearMoviesMessage, (state): IMoviesState => {
    return { ...state,
      message: null
    };
  })
);
