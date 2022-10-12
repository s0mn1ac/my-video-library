/* Angular */
import { Injectable } from '@angular/core';

/* RxJs */
import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/app/state/actions/auth.actions';
import { AuthSelectors } from 'src/app/state/selectors/auth.selectors';
import { CreditsActions } from 'src/app/state/actions/credits.actions';
import { CreditsSelectors } from 'src/app/state/selectors/credits.selectors';
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

  private selectAuthMessage$: Observable<IMessage | null> = new Observable<IMessage | null>();
  private selectCreditsMessage$: Observable<IMessage | null> = new Observable<IMessage | null>();
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
    this.selectAuthMessage$ = this.store.select(AuthSelectors.selectAuthMessage);
    this.selectCreditsMessage$ = this.store.select(CreditsSelectors.selectCreditsMessage);
    this.selectMoviesMessage$ = this.store.select(MoviesSelectors.selectMoviesMessage);
  }

  private initStoreSubscriptions(): void {
    this.selectAuthMessage$.subscribe(message => this.setMessage(message, AuthActions.clearAuthMessage()));
    this.selectCreditsMessage$.subscribe(message => this.setMessage(message, CreditsActions.clearCreditsMessage()));
    this.selectMoviesMessage$.subscribe(message => this.setMessage(message, MoviesActions.clearMoviesMessage()));
  }

  private async setMessage(message: IMessage | null, action: TypedAction<string>): Promise<void> {

    if (message === null) {
      return;
    }

    switch (message.type) {
      case MessageType.Success:
        const successDetail: string = this.translocoService.translate(`messages.success.${message.key}`);
        console.log(`⚫️⚫️🟢 ${successDetail}`);
        this.showSuccessToast(successDetail);
        break;
      case MessageType.Warning:
        const warningDetail: string = this.translocoService.translate(`messages.warning.${message.key}`);
        console.warn(`⚫️🟡⚫️ ${warningDetail}`);
        this.showWarningToast(warningDetail);
        break;
      case MessageType.Error:
        const errorDetail: string = this.translocoService.translate(`messages.error.${message.key}`);
        console.error(`🔴⚫️⚫️ ${errorDetail}`);
        this.showErrorToast(errorDetail);
        break;
    }
    
    this.store.dispatch(action);
  }

  private showSuccessToast(detail: string): void {
    this.messageService.add({ severity: MessageType.Success, detail });
  }

  private showWarningToast(detail: string): void {
      this.messageService.add({ severity: MessageType.Warning, detail });
  }

  private showErrorToast(detail: string): void {
      this.messageService.add({ severity: MessageType.Error, detail });
  }

}
