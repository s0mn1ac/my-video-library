/* Angular */
import { Component, OnDestroy, OnInit } from '@angular/core';

/* RxJs */
import { Subject, takeUntil } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';

/* Services */
import { MessagesService } from './shared/services/messages.service';

/* Interfaces */
import { IAppState } from './state/interfaces/app-state.interface';
import { TranslocoService } from '@ngneat/transloco';
import { DatesActions } from './state/actions/dates.actions';
import { DateFormatConstants } from './shared/constants/date-format.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<boolean>();

  constructor(
    private messagesService: MessagesService,
    private translocoService: TranslocoService,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.initDateFormatSubscription();
    this.initDateFormats();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
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
