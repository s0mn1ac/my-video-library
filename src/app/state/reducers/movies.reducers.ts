/* NgRx */
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { getPopularMoviesError, getPopularMoviesLoad, getPopularMoviesSuccess } from '../actions/movies.actions';

/* Interfaces */
import { IMoviesState } from '../interfaces/movies-state.interface';

export const initialState: IMoviesState = {
  movies: [],
  loading: true
};

export const moviesReducer: ActionReducer<IMoviesState, Action> = createReducer(
  initialState,
  on(getPopularMoviesLoad, (state): IMoviesState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(getPopularMoviesSuccess, (state, { movies }): IMoviesState => {
    return {
      ...state,
      movies: movies,
      loading: false
    };
  }),
  on(getPopularMoviesError, (state, { error }): IMoviesState => {
    return {
      ...state,
      loading: false
    };
  })
);
