/* NgRx */
import { ActionReducerMap } from '@ngrx/store';
import { CreditsEffects } from './effects/credits.effects';
import { creditsReducer } from './reducers/credits.reducers';
import { datesReducer } from './reducers/dates.reducers';
import { MoviesEffects } from './effects/movies.effects';
import { moviesReducer } from './reducers/movies.reducers';

/* Interfaces */
import { IAppState } from './interfaces/app-state.interface';

export const ROOT_REDUCERS: ActionReducerMap<IAppState> = {
  credits: creditsReducer,
  dates: datesReducer,
  movies: moviesReducer
};

export const ROOT_EFFECTS: any[] = [
    CreditsEffects,
    MoviesEffects
];
