/* Angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/* NgRx */
import { NgRxModule } from './shared/modules/ngrx.module';

/* Application modules */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgRxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
