/* Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { BoardComponent } from './board.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardComponentRoutingModule {}
