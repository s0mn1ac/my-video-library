/* NgRx */
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { DatesActions } from '../actions/dates.actions';

/* Interfaces */
import { IDatesState } from '../interfaces/dates-state.interface';

/* Constants */
import { DateFormatConstants } from 'src/app/shared/constants/date-format.constants';

export const initialState: IDatesState = {
  date: DateFormatConstants.DATE_FORMAT_ES,
  dateTime: DateFormatConstants.DATE_TIME_FORMAT_ES,
  year: DateFormatConstants.YEAR_FORMAT_ES
};

export const datesReducer: ActionReducer<IDatesState, Action> = createReducer(
  initialState,
  on(DatesActions.setDateFormat, (state, { format }): IDatesState => {
    return { ...state,
      date: format
    };
  }),
  on(DatesActions.setDateTimeFormat, (state, { format }): IDatesState => {
    return { ...state,
      dateTime: format
    };
  }),
  on(DatesActions.setYearFormat, (state, { format }): IDatesState => {
    return { ...state,
      year: format
    };
  })
);
