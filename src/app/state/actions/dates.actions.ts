/* NgRx */
import { createAction, props } from '@ngrx/store';

/* Constants */
import { DatesConstants } from '../constants/dates.constants';

export class DatesActions {


  /* --------- Set date format ---------------------------------------------------------------------------------------------------------- */

  public static setDateFormat = createAction(
    DatesConstants.GENERAL_SET_DATE_FORMAT,
    props<{ format: string }>()
  );


  /* --------- Set date time format ----------------------------------------------------------------------------------------------------- */

  public static setDateTimeFormat = createAction(
    DatesConstants.GENERAL_SET_DATE_TIME_FORMAT,
    props<{ format: string }>()
  );


  /* --------- Set year format ---------------------------------------------------------------------------------------------------------- */

  public static setYearFormat = createAction(
    DatesConstants.GENERAL_SET_YEAR_FORMAT,
    props<{ format: string }>()
  );
  
}
