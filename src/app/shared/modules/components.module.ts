/* Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/* PrimeNg */
import { PrimeNgModule } from './primeng.module';

/* Components */
import { CardComponent } from '../components/card/card.component';
import { CarouselSkeletonComponent } from '../components/carousel/carousel-skeleton/carousel-skeleton.component';
import { CarouselComponent } from '../components/carousel/carousel.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent,
    CarouselSkeletonComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CarouselComponent,
    CardComponent,
    CarouselSkeletonComponent
  ]
})
export class ComponentsModule { }
