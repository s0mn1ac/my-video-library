/* Interfaces */
import { IMessage } from 'src/app/shared/interfaces/message.interface';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { IMovieDetails } from 'src/app/shared/interfaces/movie-details.interface';

export interface IMoviesState {
  movieDetails: IMovieDetails | null;
  popular: IMovie[];
  nowPlaying: IMovie[];
  upcoming: IMovie[];
  topRated: IMovie[];
  latest: IMovie[];
  loadingPopular: boolean;
  loadingNowPlaying: boolean;
  loadingUpcoming: boolean;
  loadingTopRated: boolean;
  loadingLatest: boolean;
  loadingMovieDetails: boolean;
  message: IMessage | null;
}
