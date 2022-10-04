/* NgRx */
import { createSelector } from '@ngrx/store';

/* Interfaces */
import { IAppState } from '../interfaces/app-state.interface';
import { IDatesState } from '../interfaces/dates-state.interface';

export class DatesSelectors {

  public static selectDatesState = (state: IAppState) => state.dates;


  /* --------- Set date format ---------------------------------------------------------------------------------------------------------- */

  public static selectDateFormat = createSelector(
    DatesSelectors.selectDatesState,
    (state: IDatesState) => state.date
  );


  /* --------- Set date time format ----------------------------------------------------------------------------------------------------- */

  public static selectDateTimeFormat = createSelector(
    DatesSelectors.selectDatesState,
    (state: IDatesState) => state.dateTime
  );


  /* --------- Set year format ---------------------------------------------------------------------------------------------------------- */

  public static selectYearFormat = createSelector(
    DatesSelectors.selectDatesState,
    (state: IDatesState) => state.year
  );

}
