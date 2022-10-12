/* NgRx */
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';

/* Interfaces */
import { IAuthState } from '../interfaces/auth-state.interface';

/* Enums */
import { MessageType } from 'src/app/shared/enums/message-type.enum';

export const initialState: IAuthState = {
  auth: null,
  session: null,
  loading: true,
  message: null
};

export const authReducer: ActionReducer<IAuthState, Action> = createReducer(
  initialState,
  on(AuthActions.setAuthInitialStatus, (state, { auth }): IAuthState => ({
    ...state, auth: auth
  })),
  on(AuthActions.setSessionInitialStatus, (state, { session }): IAuthState => ({
    ...state, session: session
  })),
  on(AuthActions.clearInitialStatus, (state): IAuthState => ({
    ...state, auth: null, session: null
  })),
  on(AuthActions.getRequestTokenLoad, (state): IAuthState => ({
    ...state, auth: null, loading: true
  })),
  on(AuthActions.getRequestTokenSuccess, (state, { auth }): IAuthState => ({
    ...state, auth: auth, loading: false
  })),
  on(AuthActions.getRequestTokenError, (state, { error }): IAuthState => ({
    ...state, loading: false, message: { type: MessageType.Error, key: 'getRequestTokenError', error }
  })),
  on(AuthActions.postCreateSessionWithLoginLoad, (state): IAuthState => ({
    ...state, auth: null, loading: true
  })),
  on(AuthActions.postCreateSessionWithLoginSuccess, (state, { auth }): IAuthState => ({
    ...state, auth: auth, loading: false
  })),
  on(AuthActions.postCreateSessionWithLoginError, (state, { error }): IAuthState => ({
    ...state, loading: false, message: { type: MessageType.Error, key: 'postCreateSessionWithLoginError', error }
  })),
  on(AuthActions.postCreateSessionLoad, (state): IAuthState => ({
    ...state, session: null, loading: true
  })),
  on(AuthActions.postCreateSessionSuccess, (state, { session }): IAuthState => ({
    ...state, session: session, loading: false, message: { type: MessageType.Success, key: 'postCreateSessionSuccess', error: null }
  })),
  on(AuthActions.postCreateSessionError, (state, { error }): IAuthState => ({
    ...state, loading: false, message: { type: MessageType.Error, key: 'postCreateSessionError', error }
  })),
  on(AuthActions.clearAuthMessage, (state): IAuthState => ({
    ...state, message: null
  }))
);
