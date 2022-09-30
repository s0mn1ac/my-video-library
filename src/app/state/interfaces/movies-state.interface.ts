/* Models */
import { Movie } from 'src/app/shared/models/movie.model';

/* Interfaces */
import { IMessage } from 'src/app/shared/interfaces/message.interface';

export interface IMoviesState {
  movie: Movie | null;
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
