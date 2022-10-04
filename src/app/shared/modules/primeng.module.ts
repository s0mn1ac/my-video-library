/* Angular */
import { NgModule } from '@angular/core';

/* PrimeNg */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RatingModule } from 'primeng/rating';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    ToastModule,
    RatingModule,
    SkeletonModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    ToastModule,
    RatingModule,
    SkeletonModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimeNgModule { }
