/* Angular */
import { NgModule } from '@angular/core';

/* Application modules */
import { LoginComponentRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

/* Components */
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    LoginComponentRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginComponentModule { }
