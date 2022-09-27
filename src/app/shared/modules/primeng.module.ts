/* Angular */
import { NgModule } from '@angular/core';

/* PrimeNg */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
