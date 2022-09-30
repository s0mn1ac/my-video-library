/* Angular */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

/* RxJs */
import { Subscription } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';

/* Services */
import { MoviesService } from 'src/app/shared/services/movies.service';

/* Interfaces */
import { IAppState } from 'src/app/state/interfaces/app-state.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.initParamsSubscription();
  }

  private initParamsSubscription(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.getMovieDetails(params['id'] ? parseInt(params['id'], 10) : null));
  }

  private getMovieDetails(id: number | null): void {
    this.moviesService.getMovieDetails(id);
  }

}
