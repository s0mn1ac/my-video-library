/* Angular */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* PrimeNg */
import { PrimeNgModule } from './primeng.module';

/* Components */
import { CardComponent } from '../components/card/card.component';
import { CarouselSkeletonComponent } from '../components/carousel/carousel-skeleton/carousel-skeleton.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { VoteAverageComponent } from '../components/vote-average/vote-average.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent,
    VoteAverageComponent,
    CarouselSkeletonComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CarouselComponent,
    CardComponent,
    VoteAverageComponent,
    CarouselSkeletonComponent
  ]
})
export class ComponentsModule { }
