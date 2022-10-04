/* Interfaces */
import { IMessage } from 'src/app/shared/interfaces/message.interface';

/* Models */
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieDetails } from 'src/app/shared/models/movie-details.model';

export interface IMoviesState {
  movieDetails: MovieDetails | null;
  popular: Movie[];
  nowPlaying: Movie[];
  upcoming: Movie[];
  topRated: Movie[];
  latest: Movie[];
  loadingPopular: boolean;
  loadingNowPlaying: boolean;
  loadingUpcoming: boolean;
  loadingTopRated: boolean;
  loadingLatest: boolean;
  loadingMovie: boolean;
  message: IMessage | null;
}
