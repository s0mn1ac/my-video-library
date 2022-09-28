/* Angular */
import { NgModule } from '@angular/core';

/* Application modules */
import { MoviesComponentRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

/* Components */
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    MoviesComponentRoutingModule,
    SharedModule,
  ],
  declarations: [
    MoviesComponent
  ]
})
export class MoviesComponentModule { }
