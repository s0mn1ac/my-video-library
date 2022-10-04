/* Angular */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

/* RxJs */
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';

/* Services */
import { MoviesService } from 'src/app/shared/services/movies.service';

/* Interfaces */
import { IAppState } from 'src/app/state/interfaces/app-state.interface';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesSelectors } from 'src/app/state/selectors/movies.selectors';
import { MovieDetails } from 'src/app/shared/models/movie-details.model';
import { DatesSelectors } from 'src/app/state/selectors/dates.selectors';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  public dateFormat!: string;
  public yearFormat!: string;

  public movieDetails!: MovieDetails | null;

  private movieDetails$: Observable<MovieDetails | null> = new Observable<Movie>();
  private dateFormat$: Observable<string> = new Observable<string>();
  private yearFormat$: Observable<string> = new Observable<string>();

  private destroy$ = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
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

  private initParamsSubscription(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.getMovieDetails(params['id'] ? parseInt(params['id'], 10) : null));
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

  private getMovieDetails(id: number | null): void {
    this.moviesService.getMovieDetails(id);
  }

}
