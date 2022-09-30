/* Angular */
import { NgModule } from '@angular/core';

/* PrimeNg */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { MessagesService } from '../services/messages.service';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    ToastModule,
    SkeletonModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    ToastModule,
    SkeletonModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimeNgModule { }
