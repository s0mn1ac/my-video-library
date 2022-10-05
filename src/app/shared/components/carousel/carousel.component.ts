/* Angular */
import { Component, Input } from '@angular/core';

/* Interfaces */
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() carouselId!: string;
  @Input() items!: IMovie[];

}
