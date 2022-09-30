/* Angular */
import { Component, Input } from '@angular/core';

/* Models */
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() carouselId!: string;
  @Input() items!: Movie[];

}
