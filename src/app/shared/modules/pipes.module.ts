/* Angular */
import { NgModule } from '@angular/core';

/* Pipes */
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { TaglinePipe } from '../pipes/tagline.pipe';

@NgModule({
  declarations: [
    DateFormatPipe,
    TaglinePipe
  ],
  exports: [
    DateFormatPipe,
    TaglinePipe
  ]
})
export class PipesModule { }
