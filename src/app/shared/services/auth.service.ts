/* Angular */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Environment */
import { environment } from 'src/environments/environment';

/* RxJs */
import { map, Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/app/state/actions/auth.actions';

/* Services */
import { TranslocoService } from '@ngneat/transloco';

/* Interfaces */
import { IAuth } from '../interfaces/auth.interface';
import { ISession } from '../interfaces/session.interface';
import { StorageConstants } from '../constants/storage.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private translocoService: TranslocoService,
    private store: Store
  ) { }


  /* --------- Login -------------------------------------------------------------------------------------------------------------------- */

  public login(username: string, password: string): void {
    this.store.dispatch(AuthActions.getRequestTokenLoad({ username, password }))
  }


  /* --------- Get request token -------------------------------------------------------------------------------------------------------- */

  public getRequestTokenReport(): Observable<IAuth> {
    return this.httpClient
      .get(`${environment.tmdbAuthenticationUrl}/token/new?api_key=${environment.tmdbKey}`)
      .pipe(map((response: any) => response as IAuth));
  }


  /* --------- Post create session with login ------------------------------------------------------------------------------------------- */

  public postCreateSessionWithLoginReport(username: string, password: string, token: string): Observable<IAuth> {
    return this.httpClient
      .post(`${environment.tmdbAuthenticationUrl}/token/validate_with_login?api_key=${environment.tmdbKey}`, {
        username: username,
        password: password,
        request_token: token
      })
      .pipe(map((response: any) => {
        localStorage.setItem(StorageConstants.AUTH, JSON.stringify(response));
        return response as IAuth;
      }));
  }


  /* --------- Post create session ------------------------------------------------------------------------------------------------------ */

  public postCreateSessionReport(token: string): Observable<ISession> {
    return this.httpClient
      .post(`${environment.tmdbAuthenticationUrl}/session/new?api_key=${environment.tmdbKey}`, {
        request_token: token
      })
      .pipe(map((response: any) => {
        const session: ISession = { session_id: response.session_id, success: response.success, logged: true };
        localStorage.setItem(StorageConstants.SESSION, JSON.stringify(session));
        return session;
      }));
  }


  /* --------- Private methods ---------------------------------------------------------------------------------------------------------- */

  private getActiveLang(): string {
    return `&language=${this.translocoService.getActiveLang() === 'es' ? 'es-ES' : 'en-US'}`;
  }

}
