/* Angular */
import { NgModule } from '@angular/core';

/* Application modules */
import { BoardComponentRoutingModule } from './board-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

/* Components */
import { BoardComponent } from './board.component';

@NgModule({
  imports: [
    BoardComponentRoutingModule,
    SharedModule,
  ],
  declarations: [
    BoardComponent
  ]
})
export class BoardComponentModule { }
