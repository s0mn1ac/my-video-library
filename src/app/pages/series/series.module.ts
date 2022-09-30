/* Angular */
import { NgModule } from '@angular/core';

/* Application modules */
import { SeriesComponentRoutingModule } from './series-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

/* Components */
import { SeriesComponent } from './series.component';

@NgModule({
  imports: [
    SeriesComponentRoutingModule,
    SharedModule
  ],
  declarations: [
    SeriesComponent
  ]
})
export class SeriesComponentModule { }
