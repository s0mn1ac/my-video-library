/* Angular */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

/* RxJx */
import { filter, Observable } from 'rxjs';

/* Models */
import { Header } from 'src/app/shared/models/header.model';

/* Enums */
import { HeaderSection } from 'src/app/shared/enums/header-section.enum';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/interfaces/app-state.interface';
import { AuthSelectors } from 'src/app/state/selectors/auth.selectors';
import { AuthActions } from 'src/app/state/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logged$: Observable<boolean> = new Observable<boolean>();

  public header: Header = new Header();

  constructor(
    private router: Router,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.initStoreSelectors();
    this.initRouterEventsSubscription();
  }

  public onClickLogOutButton(): void {
    this.clearInitialStatus();
  }

  private initStoreSelectors(): void {
    this.logged$ = this.store.select(AuthSelectors.selectLogged);
  }

  private initRouterEventsSubscription(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((navigation: NavigationEnd) => {
        if (navigation.url.startsWith('/board')) {
          this.header.setHeaderSelectedValue(HeaderSection.Board);
        } else if (navigation.url.startsWith('/movies')) {
          this.header.setHeaderSelectedValue(HeaderSection.Movies);
        } else if (navigation.url.startsWith('/series')) {
          this.header.setHeaderSelectedValue(HeaderSection.Series);
        }
      });
  }


  /* --------- Store dispatchers -------------------------------------------------------------------------------------------------------- */

  private clearInitialStatus(): void {
    this.store.dispatch(AuthActions.clearInitialStatus());
  }

}
