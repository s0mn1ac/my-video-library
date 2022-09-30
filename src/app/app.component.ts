/* Angular */
import { Component } from '@angular/core';

/* Services */
import { MessagesService } from './shared/services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private messagesService: MessagesService) { }

}
