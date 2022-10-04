/* Angular */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Environment */
import { environment } from 'src/environments/environment';

/* RxJs */
import { map, Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { CreditsActions } from 'src/app/state/actions/credits.actions';

/* Services */
import { TranslocoService } from '@ngneat/transloco';

/* Interfaces */
import { ICredits } from '../interfaces/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(
    private httpClient: HttpClient,
    private translocoService: TranslocoService,
    private store: Store
  ) { }


  /* --------- Get credits -------------------------------------------------------------------------------------------------------------- */

  public getCredits(id: number | null): void {
    this.store.dispatch(CreditsActions.getCreditsLoad({ id }))
  }

  public getCreditsReport(id: number | null): Observable<ICredits> {
    return this.httpClient
      .get(`${environment.tmdbMovieUrl}/${id}/credits?api_key=${environment.tmdbKey}${this.getActiveLang()}`)
      .pipe(map((response: any) => response));
  }


  /* --------- Private methods ---------------------------------------------------------------------------------------------------------- */

  private getActiveLang(): string {
    return `&language=${this.translocoService.getActiveLang() === 'es' ? 'es-ES' : 'en-US'}`;
  }

}
