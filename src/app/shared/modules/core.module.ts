/* Angular */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Transloco */
// import { TranslocoModule } from '@ngneat/transloco';

/* Application modules */
import { PipesModule } from './pipes.module';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // TranslocoModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    // TranslocoModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    PrimeNgModule
  ],
  providers: []
})
export class CoreModule { }
