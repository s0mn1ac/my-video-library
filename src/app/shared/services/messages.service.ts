/* Angular */
import { Injectable } from '@angular/core';

/* RxJs */
import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { MoviesActions } from 'src/app/state/actions/movies.actions';
import { MoviesSelectors } from 'src/app/state/selectors/movies.selectors';

/* Models */
import { TypedAction } from '@ngrx/store/src/models';

/* Interfaces */
import { IMessage } from 'src/app/shared/interfaces/message.interface';
import { IAppState } from 'src/app/state/interfaces/app-state.interface';

/* Enums */
import { MessageType } from '../enums/message-type.enum';
import { MessageService } from 'primeng/api';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private selectMoviesMessage$: Observable<IMessage | null> = new Observable<IMessage | null>();

  constructor(
    private messageService: MessageService,
    private translocoService: TranslocoService,
    private store: Store<IAppState>
  ) {
    this.initStoreSelectors();
    this.initStoreSubscriptions();
  }

  private initStoreSelectors(): void {
    this.selectMoviesMessage$ = this.store.select(MoviesSelectors.selectMoviesMessage);
  }

  private initStoreSubscriptions(): void {
    this.selectMoviesMessage$.subscribe(message => this.setMessage(message, MoviesActions.clearMoviesMessage()));
  }

  private async setMessage(message: IMessage | null, action: TypedAction<string>): Promise<void> {

    if (message === null) {
      return;
    }

    switch (message.type) {
      case MessageType.Success:
        console.log(`⚫️⚫️🟢 ${message.key}`);
        this.showSuccessToast(message.key);
        break;
      case MessageType.Warning:
        console.warn(`⚫️🟡⚫️ ${message.key}`);
        this.showWarningToast(message.key);
        break;
      case MessageType.Error:
        console.error(`🔴⚫️⚫️ ${message.key}`);
        this.showErrorToast(message.key);
        break;
    }
    
    this.store.dispatch(action);
  }

  private showSuccessToast(key: string): void {
    this.messageService.add({ severity: MessageType.Success, detail: this.translocoService.translate(`messages.success.${key}`) });
  }

  private showWarningToast(key: string): void {
      this.messageService.add({ severity: MessageType.Warning, detail: this.translocoService.translate(`messages.warning.${key}`) });
  }

  private showErrorToast(key: string): void {
      this.messageService.add({ severity: MessageType.Error, detail: this.translocoService.translate(`messages.error.${key}`) });
  }

}
