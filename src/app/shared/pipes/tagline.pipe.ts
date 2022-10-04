import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagline'
})
export class TaglinePipe implements PipeTransform {

  transform(value: string | undefined): string {
    return value === undefined ? '' : `«${value.endsWith('.') ? value.slice(0, -1) : value}»`;
  }

}
