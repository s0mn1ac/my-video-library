/* Angular */
import { NgModule } from '@angular/core';

/* Application modules */
import { MovieComponentRoutingModule } from './movie-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

/* Components */
import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    MovieComponentRoutingModule,
    SharedModule
  ],
  declarations: [
    MovieComponent
  ]
})
export class MovieComponentModule { }
