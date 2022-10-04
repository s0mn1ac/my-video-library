/* Angular */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

/* RxJs */
import { Observable, Subject, takeUntil } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { DatesSelectors } from 'src/app/state/selectors/dates.selectors';
import { MoviesSelectors } from 'src/app/state/selectors/movies.selectors';

/* Services */
import { CreditsService } from 'src/app/shared/services/credits.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

/* Interfaces */
import { IAppState } from 'src/app/state/interfaces/app-state.interface';

/* Models */
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieDetails } from 'src/app/shared/models/movie-details.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  public dateFormat!: string;
  public yearFormat!: string;

  public rating: number = 3;

  public movieDetails!: MovieDetails | null;

  private movieDetails$: Observable<MovieDetails | null> = new Observable<Movie>();
  private dateFormat$: Observable<string> = new Observable<string>();
  private yearFormat$: Observable<string> = new Observable<string>();

  private destroy$ = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private creditsService: CreditsService,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.initStoreSelectors();
    this.initStoreSubscriptions();
    this.initParamsSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public onRate(event: any): void {
    console.log(event.value)
  }

  private initParamsSubscription(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.loadPage(params['id'] ? parseInt(params['id'], 10) : null));
  }

  private initStoreSelectors(): void {
    this.movieDetails$ = this.store.select(MoviesSelectors.selectMovieDetails);
    this.dateFormat$ = this.store.select(DatesSelectors.selectDateFormat);
    this.yearFormat$ = this.store.select(DatesSelectors.selectYearFormat);
  }

  private initStoreSubscriptions(): void {

    this.movieDetails$
      .pipe(takeUntil(this.destroy$))
      .subscribe((movieDetails: MovieDetails | null) => this.movieDetails = movieDetails);

    this.dateFormat$
      .pipe(takeUntil(this.destroy$))
      .subscribe((dateFormat: string) => this.dateFormat = dateFormat);

    this.yearFormat$
      .pipe(takeUntil(this.destroy$))
      .subscribe((yearFormat: string) => this.yearFormat = yearFormat);
  }

  private loadPage(id: number | null): void {
    this.moviesService.getMovieDetails(id);
    this.creditsService.getCredits(id);
  }

}
