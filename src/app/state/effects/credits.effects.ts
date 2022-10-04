/* Angular */
import { Injectable } from '@angular/core';

/* RxJs */
import { of, map, mergeMap, catchError } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreditsActions } from '../actions/credits.actions';

/* Interfaces */
import { CreditsService } from 'src/app/shared/services/credits.service';

/* Models */
import { ICredits } from 'src/app/shared/interfaces/credits.interface';

@Injectable()
export class CreditsEffects {


  /* --------- Get credits -------------------------------------------------------------------------------------------------------------- */

  getCreditsLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreditsActions.getCreditsLoad),
      mergeMap((props) => this.creditsService.getCreditsReport(props.id)
        .pipe(
          map((credits: ICredits) => (CreditsActions.getCreditsSuccess({ credits }))),
          catchError((error) => of(CreditsActions.getCreditsError({error})))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private creditsService: CreditsService
  ) { }

}
