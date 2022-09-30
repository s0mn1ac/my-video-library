import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/shared/interfaces/message.interface';
import { clearMoviesMessage } from 'src/app/state/actions/movies.actions';
import { IAppState } from 'src/app/state/interfaces/app-state.interface';
import { selectMoviesMessage } from 'src/app/state/selectors/movies.selectors';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private selectMoviesMessage$: Observable<IMessage | null> = new Observable<IMessage | null>();

  constructor(
    private store: Store<IAppState>
  ) {
    this.initStoreSelectors();
    this.initStoreSubscriptions();
  }

  private initStoreSelectors(): void {
    this.selectMoviesMessage$ = this.store.select(selectMoviesMessage);
  }

  private initStoreSubscriptions(): void {
    this.selectMoviesMessage$.subscribe(message => this.setMessage(message, clearMoviesMessage()));
  }

  private async setMessage(message: IMessage | null, action: TypedAction<string>): Promise<void> {

    if (message === null) {
      return;
    }

    switch (message.type) {
      case 'success':
        console.log('SUCCESS:', message.key);
        break;
      case 'warning':
        console.log('SUCCESS:', message.key);
        break;
      case 'error':
        console.log('SUCCESS:', message.key);
        break;
    }
    
    this.store.dispatch(action);
  }

}
