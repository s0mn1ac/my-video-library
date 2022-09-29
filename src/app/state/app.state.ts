/* NgRx */
import { ActionReducerMap } from '@ngrx/store';
import { MoviesEffects } from './effects/movies.effects';


/* Interfaces */
import { IAppState } from './interfaces/app-state.interface';
import { moviesReducer } from './reducers/movies.reducers';

export const ROOT_REDUCERS: ActionReducerMap<IAppState> = {
  movies: moviesReducer
};

export const ROOT_EFFECTS: any[] = [
    MoviesEffects
];
