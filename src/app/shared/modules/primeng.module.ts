/* Angular */
import { NgModule } from '@angular/core';

/* PrimeNg */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    SkeletonModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    SkeletonModule
  ]
})
export class PrimeNgModule { }
