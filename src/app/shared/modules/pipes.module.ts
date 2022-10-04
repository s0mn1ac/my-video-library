/* Angular */
import { NgModule } from '@angular/core';

/* Pipes */
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { RuntimePipe } from '../pipes/runtime.pipe';
import { TaglinePipe } from '../pipes/tagline.pipe';

@NgModule({
  declarations: [
    DateFormatPipe,
    RuntimePipe,
    TaglinePipe
  ],
  exports: [
    DateFormatPipe,
    RuntimePipe,
    TaglinePipe
  ]
})
export class PipesModule { }
