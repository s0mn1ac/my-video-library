/* NgRx */
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
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
import { IMoviesState } from '../interfaces/movies-state.interface';

export const initialState: IMoviesState = {
  popular: [],
  nowPlaying: [],
  upcoming: [],
  topRated: [],
  latest: [],
  loadingPopular: true,
  loadingNowPlaying: true,
  loadingUpcoming: true,
  loadingTopRated: true,
  loadingLatest: true
};

export const moviesReducer: ActionReducer<IMoviesState, Action> = createReducer(
  initialState,
  on(getPopularMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      loadingPopular: true
    };
  }),
  on(getPopularMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      popular: movies,
      loadingPopular: false
    };
  }),
  on(getPopularMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingPopular: false
    };
  }),
  on(getNowPlayingMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      loadingNowPlaying: true
    };
  }),
  on(getNowPlayingMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      nowPlaying: movies,
      loadingNowPlaying: false
    };
  }),
  on(getNowPlayingMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingNowPlaying: false
    };
  }),
  on(getUpcomingMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      loadingUpcoming: true
    };
  }),
  on(getUpcomingMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      upcoming: movies,
      loadingUpcoming: false
    };
  }),
  on(getUpcomingMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingUpcoming: false
    };
  }),
  on(getTopRatedMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      loadingTopRated: true
    };
  }),
  on(getTopRatedMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      topRated: movies,
      loadingTopRated: false
    };
  }),
  on(getTopRatedMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loadingTopRated: false
    };
  })
);
