/* NgRx */
import { ActionReducerMap } from '@ngrx/store';
import { datesReducer } from './reducers/dates.reducers';
import { moviesReducer } from './reducers/movies.reducers';
import { MoviesEffects } from './effects/movies.effects';

/* Interfaces */
import { IAppState } from './interfaces/app-state.interface';

export const ROOT_REDUCERS: ActionReducerMap<IAppState> = {
  movies: moviesReducer,
  dates: datesReducer
};

export const ROOT_EFFECTS: any[] = [
    MoviesEffects
];
