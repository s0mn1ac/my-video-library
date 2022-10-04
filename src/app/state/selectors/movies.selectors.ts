/* NgRx */
import { createSelector } from '@ngrx/store';

/* Interfaces */
import { IAppState } from '../interfaces/app-state.interface';
import { IMoviesState } from '../interfaces/movies-state.interface';

export class MoviesSelectors {

  public static selectMoviesState = (state: IAppState) => state.movies;


  /* --------- Get popular movies ------------------------------------------------------------------------------------------------------- */
  
  public static selectPopularMovies = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.popular
  );
  
  public static selectLoadingPopularMovies = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.loadingPopular
  );
  
  
  /* --------- Get now playing movies --------------------------------------------------------------------------------------------------- */
  
  public static selectNowPlayingMovies = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.nowPlaying
  );
  
  public static selectLoadingNowPlayingMovies = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.loadingNowPlaying
  );
  
  
  /* --------- Get upcoming movies ------------------------------------------------------------------------------------------------------ */
  
  public static selectUpcomingMovies = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.upcoming
  );
  
  public static selectLoadingUpcomingMovies = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.loadingUpcoming
  );
  
  
  /* --------- Get top rated movies ----------------------------------------------------------------------------------------------------- */
  
  public static selectTopRatedMovies = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.topRated
  );
  
  public static selectLoadingTopRatedMovies = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.loadingTopRated
  );
  
  
  /* --------- Get movie details -------------------------------------------------------------------------------------------------------- */
  
  public static selectMovieDetails = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.movieDetails
  );
  
  public static selectLoadingMovieDetails = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.loadingMovie
  );
  
  
  /* --------- Message ------------------------------------------------------------------------------------------------------------------ */
  
  public static selectMoviesMessage = createSelector(
    this.selectMoviesState,
    (state: IMoviesState) => state.message
  );

}
