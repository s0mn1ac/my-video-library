/* NgRx */
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { CreditsActions } from '../actions/credits.actions';

/* Interfaces */
import { ICreditsState } from '../interfaces/credits-state.interface';

/* Enums */
import { MessageType } from 'src/app/shared/enums/message-type.enum';

export const initialState: ICreditsState = {
  credits: null,
  loading: true,
  message: null
};

export const creditsReducer: ActionReducer<ICreditsState, Action> = createReducer(
  initialState,
  on(CreditsActions.getCreditsLoad, (state): ICreditsState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(CreditsActions.getCreditsSuccess, (state, { credits }): ICreditsState => {
    return {
      ...state,
      credits: credits,
      loading: false
    };
  }),
  on(CreditsActions.getCreditsError, (state, { error }): ICreditsState => {
    return {
      ...state,
      loading: false,
      message: { type: MessageType.Error, key: 'getCreditsError', error }
    };
  }),
  on(CreditsActions.clearCreditsMessage, (state): ICreditsState => {
    return { ...state,
      message: null
    };
  })
);
