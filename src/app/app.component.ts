/* Angular */
import { Component, OnDestroy, OnInit } from '@angular/core';

/* RxJs */
import { Observable, Subject, takeUntil } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { AuthSelectors } from './state/selectors/auth.selectors';
import { AuthActions } from './state/actions/auth.actions';
import { DatesActions } from './state/actions/dates.actions';

/* Services */
import { TranslocoService } from '@ngneat/transloco';

/* Interfaces */
import { IAppState } from './state/interfaces/app-state.interface';
import { IAuth } from './shared/interfaces/auth.interface';
import { ISession } from './shared/interfaces/session.interface';

/* Constants */
import { StorageConstants } from './shared/constants/storage.constants';
import { DateFormatConstants } from './shared/constants/date-format.constants';
import { MessagesService } from './shared/services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public logged$: Observable<boolean> = new Observable<boolean>();
  public auth$: Observable<IAuth | null> = new Observable<IAuth | null>();
  public session$: Observable<ISession | null> = new Observable<ISession | null>();

  private destroy$ = new Subject<boolean>();

  constructor(
    private messagesService: MessagesService,
    private translocoService: TranslocoService,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
    this.initStoreSelectors();
    this.initDateFormatSubscription();
    this.initDateFormats();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private checkIfUserIsLoggedIn(): void {
    const authStorageItem: string | null = localStorage.getItem(StorageConstants.AUTH);
    const auth: IAuth | null = authStorageItem === null ? null : JSON.parse(authStorageItem) as IAuth;
    const sessionStorageItem: string | null = localStorage.getItem(StorageConstants.SESSION);
    const session: ISession | null = sessionStorageItem === null ? null : JSON.parse(sessionStorageItem) as ISession;
    if (auth !== null && session !== null) {
      this.setAuthInitialStatus(auth);
      this.setSessionInitialStatus(session);
    }
  }

  private initStoreSelectors(): void {
    this.logged$ = this.store.select(AuthSelectors.selectLogged);
    this.auth$ = this.store.select(AuthSelectors.selectAuth);
    this.session$ = this.store.select(AuthSelectors.selectSession);
  }

  private initDateFormatSubscription(): void {
    this.translocoService.langChanges$
      .pipe(takeUntil(this.destroy$))
      .subscribe((lang: string) => {
        this.setDateFormat(DateFormatConstants.getDateFormat(lang));
        this.setDateTimeFormat(DateFormatConstants.getDateTimeFormat(lang));
        this.setYearFormat(DateFormatConstants.getYearFormat(lang));
      });
  }

  private initDateFormats(): void {
    this.setDateFormat(DateFormatConstants.getDateFormat(this.translocoService.getActiveLang()));
    this.setDateTimeFormat(DateFormatConstants.getDateTimeFormat(this.translocoService.getActiveLang()));
    this.setYearFormat(DateFormatConstants.getYearFormat(this.translocoService.getActiveLang()));
  }


  /* --------- Store dispatchers -------------------------------------------------------------------------------------------------------- */

  private setAuthInitialStatus(auth: IAuth): void {
    this.store.dispatch(AuthActions.setAuthInitialStatus({ auth }));
  }

  private setSessionInitialStatus(session: ISession): void {
    this.store.dispatch(AuthActions.setSessionInitialStatus({ session }));
  }

  private setDateFormat(format: string): void {
    this.store.dispatch(DatesActions.setDateFormat({ format }));
  }

  private setDateTimeFormat(format: string): void {
    this.store.dispatch(DatesActions.setDateTimeFormat({ format }));
  }

  private setYearFormat(format: string): void {
    this.store.dispatch(DatesActions.setYearFormat({ format }));
  }

}
