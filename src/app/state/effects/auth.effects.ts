/* Angular */
import { Injectable } from '@angular/core';

/* RxJs */
import { of, map, mergeMap, catchError } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../actions/auth.actions';

/* Services */
import { AuthService } from 'src/app/shared/services/auth.service';

/* Interfaces */
import { IAuth } from 'src/app/shared/interfaces/auth.interface';
import { ISession } from 'src/app/shared/interfaces/session.interface';

@Injectable()
export class AuthEffects {


  /* --------- Get request token -------------------------------------------------------------------------------------------------------- */

  getRequestTokenLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getRequestTokenLoad),
      mergeMap((props) => this.authService.getRequestTokenReport()
        .pipe(
          map((auth: IAuth) => (AuthActions.getRequestTokenSuccess({ username: props.username, password: props.password, auth }))),
          catchError((error) => of(AuthActions.getRequestTokenError({error})))
        )
      )
    );
  });

  getRequestTokenSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getRequestTokenSuccess),
      map((props) => AuthActions.postCreateSessionWithLoginLoad({ username: props.username, password: props.password, auth: props.auth }))
    );
  });


  /* --------- Post create session with login ------------------------------------------------------------------------------------------- */

  postCreateSessionWithLoginLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.postCreateSessionWithLoginLoad),
      mergeMap((props) => this.authService.postCreateSessionWithLoginReport(props.username, props.password, props.auth.request_token)
        .pipe(
          map((auth: IAuth) => (AuthActions.postCreateSessionWithLoginSuccess({ auth }))),
          catchError((error) => of(AuthActions.postCreateSessionWithLoginError({error})))
        )
      )
    );
  });

  postCreateSessionWithLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.postCreateSessionWithLoginSuccess),
      map((props) => AuthActions.postCreateSessionLoad({ auth: props.auth }))
    );
  });
  

  /* --------- Post create session with login ------------------------------------------------------------------------------------------- */

  postCreateSessionLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.postCreateSessionLoad),
      mergeMap((props) => this.authService.postCreateSessionReport(props.auth.request_token)
        .pipe(
          map((session: ISession) => (AuthActions.postCreateSessionSuccess({ session }))),
          catchError((error) => of(AuthActions.postCreateSessionError({error})))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

}
