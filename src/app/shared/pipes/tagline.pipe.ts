import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagline'
})
export class TaglinePipe implements PipeTransform {

  transform(value: string | undefined): string {

    if (value === undefined || value === '') {
      return '-';
    }

    return `«${value.endsWith('.') ? value.slice(0, -1) : value}»`;
  }

}
