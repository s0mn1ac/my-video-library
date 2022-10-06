/* Angular */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardId!: string;
  @Input() link!: string;
  @Input() photo!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() voteAverage!: number;
  @Input() showVoteAverage: boolean = false;

}
