import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { DateFormatConstants } from '../constants/date-format.constants';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | undefined, format: string): string {
    return value === undefined ? '-' : moment(value, DateFormatConstants.DATE_REPORT_FORMAT).format(format);
  }

}
