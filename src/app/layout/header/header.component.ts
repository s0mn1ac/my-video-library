/* Angular */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

/* RxJx */
import { filter } from 'rxjs';
import { HeaderSection } from 'src/app/shared/enums/header-section.enum';

/* Models */
import { Header } from 'src/app/shared/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header: Header = new Header();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initRouterEventsSubscription();
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

}
