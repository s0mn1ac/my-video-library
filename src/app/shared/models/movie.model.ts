/* Interfaces */
import { IMovie } from "../interfaces/movie.interface";

export class Movie {

    public posterPath?: string;
    public adult?: boolean;
    public overview?: string;
    public releaseDate?: string;
    public genreIds?: number[];
    public id?: number;
    public originalTitle?: string;
    public originalLanguage?: string;
    public title?: string;
    public backdropPath?: string;
    public popularity?: number;
    public voteCount?: number;
    public video?: boolean;
    public voteAverage?: number;

    constructor(movie: IMovie) {
        this.posterPath = movie.poster_path;
        this.adult = movie.adult;
        this.overview = movie.overview;
        this.releaseDate = movie.release_date;
        this.genreIds = movie.genre_ids;
        this.id = movie.id;
        this.originalTitle = movie.original_title;
        this.originalLanguage = movie.original_language;
        this.title = movie.title;
        this.backdropPath = movie.backdrop_path;
        this.popularity = movie.popularity;
        this.voteCount = movie.vote_count;
        this.video = movie.video;
        this.voteAverage = movie.vote_average;
    }

}
