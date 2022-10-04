/* NgRx */
import { createAction, props } from '@ngrx/store';

/* Interfaces */
import { ICredits } from 'src/app/shared/interfaces/credits.interface';

/* Constants */
import { CreditsConstants } from '../constants/credits.constants';

export class CreditsActions {


  /* --------- Get credits -------------------------------------------------------------------------------------------------------------- */

  public static getCreditsLoad = createAction(
    CreditsConstants.MOVIE_DETAILS_PAGE_GET_CREDITS_LOAD,
    props<{ id: number | null }>()
  );

  public static getCreditsSuccess = createAction(
    CreditsConstants.MOVIE_DETAILS_PAGE_GET_CREDITS_SUCCESS,
    props<{ credits: ICredits }>()
  );

  public static getCreditsError = createAction(
    CreditsConstants.MOVIE_DETAILS_PAGE_GET_CREDITS_ERROR,
    props<{ error: any }>()
  );


  /* --------- Clear message ------------------------------------------------------------------------------------------------------------ */

  public static clearCreditsMessage = createAction(
    CreditsConstants.MESSAGES_CLEAR_CREDITS_MESSAGE,
  );
  
}
