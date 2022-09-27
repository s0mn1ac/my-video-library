/* Angular */
import { NgModule } from '@angular/core';

/* Application modules */
import { CoreModule } from 'src/app/shared/modules/core.module';
import { BoardComponentRoutingModule } from './board-routing.module';

/* Components */
import { BoardComponent } from './board.component';

@NgModule({
  imports: [
    CoreModule,
    BoardComponentRoutingModule
  ],
  declarations: [
    BoardComponent
  ]
})
export class BoardComponentModule { }
