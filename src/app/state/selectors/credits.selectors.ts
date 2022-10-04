/* NgRx */
import { createSelector } from '@ngrx/store';

/* Interfaces */
import { IAppState } from '../interfaces/app-state.interface';
import { ICreditsState } from '../interfaces/credits-state.interface';

export class CreditsSelectors {

  public static selectCreditsState = (state: IAppState) => state.credits;


  /* --------- Get popular movies ------------------------------------------------------------------------------------------------------- */
  
  public static selectCredits = createSelector(
    this.selectCreditsState,
    (state: ICreditsState) => state.credits
  );
  
  public static selectLoading = createSelector(
    this.selectCreditsState,
    (state: ICreditsState) => state.loading
  );
  
  
  /* --------- Message ------------------------------------------------------------------------------------------------------------------ */
  
  public static selectMoviesMessage = createSelector(
    this.selectCreditsState,
    (state: ICreditsState) => state.message
  );

}
