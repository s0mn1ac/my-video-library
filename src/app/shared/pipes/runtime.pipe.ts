import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(value: number | undefined): string {

    if (value === undefined) {
      return '-';
    }

    const hours = (value / 60);
    const hoursRounded = Math.floor(hours);
    const minutes = (hours - hoursRounded) * 60;
    const minutesRounded = Math.round(minutes);
    
    return `${hoursRounded}h ${minutesRounded}m`;
  }

}
