/* Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Guards */
import { Logged } from 'src/app/app.guard';

/* Components */
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [Logged],
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [Logged]
})
export class LoginComponentRoutingModule {}
