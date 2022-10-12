/* NgRx */
import { createAction, props } from '@ngrx/store';

/* Interfaces */
import { IAuth } from 'src/app/shared/interfaces/auth.interface';
import { ISession } from 'src/app/shared/interfaces/session.interface';

/* Constants */
import { AuthConstants } from '../constants/auth.constants';

export class AuthActions {


  /* --------- Set initial status ------------------------------------------------------------------------------------------------------- */

  public static setInitialStatus = createAction(
    AuthConstants.AUTHENTICATION_SET_INITIAL_STATUS,
    props<{ auth: IAuth | null, session: ISession | null }>()
  );


  /* --------- Get request token -------------------------------------------------------------------------------------------------------- */

  public static getRequestTokenLoad = createAction(
    AuthConstants.AUTHENTICATION_GET_REQUEST_TOKEN_LOAD,
    props<{ username: string, password: string }>()
  );

  public static getRequestTokenSuccess = createAction(
    AuthConstants.AUTHENTICATION_GET_REQUEST_TOKEN_SUCCESS,
    props<{ username: string, password: string, auth: IAuth }>()
  );

  public static getRequestTokenError = createAction(
    AuthConstants.AUTHENTICATION_GET_REQUEST_TOKEN_ERROR,
    props<{ error: any }>()
  );


  /* --------- Post create session with login ------------------------------------------------------------------------------------------- */

  public static postCreateSessionWithLoginLoad = createAction(
    AuthConstants.AUTHENTICATION_POST_CREATE_SESSION_WITH_LOGIN_LOAD,
    props<{ username: string, password: string, auth: IAuth }>()
  );

  public static postCreateSessionWithLoginSuccess = createAction(
    AuthConstants.AUTHENTICATION_POST_CREATE_SESSION_WITH_LOGIN_SUCCESS,
    props<{ auth: IAuth }>()
  );

  public static postCreateSessionWithLoginError = createAction(
    AuthConstants.AUTHENTICATION_POST_CREATE_SESSION_WITH_LOGIN_ERROR,
    props<{ error: any }>()
  );


  /* --------- Post create session ------------------------------------------------------------------------------------------------------ */

  public static postCreateSessionLoad = createAction(
    AuthConstants.AUTHENTICATION_POST_CREATE_SESSION_LOAD,
    props<{ auth: IAuth }>()
  );

  public static postCreateSessionSuccess = createAction(
    AuthConstants.AUTHENTICATION_POST_CREATE_SESSION_SUCCESS,
    props<{ session: ISession }>()
  );

  public static postCreateSessionError = createAction(
    AuthConstants.AUTHENTICATION_POST_CREATE_SESSION_ERROR,
    props<{ error: any }>()
  );


  /* --------- Clear message ------------------------------------------------------------------------------------------------------------ */

  public static clearAuthMessage = createAction(
    AuthConstants.MESSAGES_CLEAR_AUTH_MESSAGE,
  );
  
}
