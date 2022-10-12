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
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    ToastModule,
    RatingModule,
    PasswordModule,
    SkeletonModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    ToastModule,
    RatingModule,
    PasswordModule,
    SkeletonModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimeNgModule { }
