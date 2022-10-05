/* Angular */
import { Component, Input } from '@angular/core';

/* Interfaces */
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardId!: string;
  @Input() item!: IMovie;

}
