import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { DateFormatsConstants } from '../constants/date-formats.constants';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | undefined, format: string): string {
    return value === undefined ? '-' : moment(value, DateFormatsConstants.DATE_REPORT_FORMAT).format(format);
  }

}
