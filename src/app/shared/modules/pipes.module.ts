/* Angular */
import { NgModule } from '@angular/core';

/* Pipes */
import { TaglinePipe } from '../pipes/tagline.pipe';

@NgModule({
  declarations: [
    TaglinePipe
  ],
  exports: [
    TaglinePipe
  ]
})
export class PipesModule { }
