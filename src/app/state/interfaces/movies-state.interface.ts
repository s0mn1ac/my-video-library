/* Models */
import { Movie } from 'src/app/shared/models/movie.model';

export interface IMoviesState {
  movies: Movie[];
  loading: boolean;
}
