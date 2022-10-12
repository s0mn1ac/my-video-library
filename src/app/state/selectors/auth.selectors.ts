/* NgRx */
import { createSelector } from '@ngrx/store';
import { ISession } from 'src/app/shared/interfaces/session.interface';

/* Interfaces */
import { IAppState } from '../interfaces/app-state.interface';
import { IAuthState } from '../interfaces/auth-state.interface';

export class AuthSelectors {

  public static selectAuthState = (state: IAppState) => state.auth;


  /* --------- Auth --------------------------------------------------------------------------------------------------------------------- */

  public static selectAuth = createSelector(
    this.selectAuthState,
    (state: IAuthState) => state.auth
  );
  

  /* --------- Session ------------------------------------------------------------------------------------------------------------------ */

  public static selectSession = createSelector(
    this.selectAuthState,
    (state: IAuthState) => state.session
  );

  public static selectLogged = createSelector(
    this.selectSession,
    (session: ISession | null) => session?.logged ?? false
  );
  

  /* --------- Loading ------------------------------------------------------------------------------------------------------------------ */

  public static selectLoadingAuth = createSelector(
    this.selectAuthState,
    (state: IAuthState) => state.loading
  );

  
  /* --------- Message ------------------------------------------------------------------------------------------------------------------ */
  
  public static selectAuthMessage = createSelector(
    this.selectAuthState,
    (state: IAuthState) => state.message
  );

}
