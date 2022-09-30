/* Angular */
import { Component, Input } from '@angular/core';

/* Models */
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardId!: string;
  @Input() item!: Movie;

}
