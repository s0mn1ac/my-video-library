/* Interfaces */
import { IGenre } from "../interfaces/genre.interface";
import { IMovieDetails } from "../interfaces/movie-details.interface";
import { IProductionCompany } from "../interfaces/production-company.interface";
import { IProductionCountry } from "../interfaces/production-country.interface";
import { ISpokenLanguage } from "../interfaces/spoken-language.interface";

export class MovieDetails {

    public adult?: boolean;
    public backdropPath?: string;
    public belongsToCollection?: any;
    public budget?: number;
    public genres?: IGenre[];
    public homepage?: string;
    public id?: number;
    public imdbId?: string;
    public originalLanguage?: string;
    public originalTitle?: string;
    public overview?: string;
    public popularity?: number;
    public posterPath?: any;
    public productionCompanies?: IProductionCompany[];
    public productionCountries?: IProductionCountry[];
    public releaseDate?: string;
    public revenue?: number;
    public runtime?: number;
    public spokenLanguages?: ISpokenLanguage[];
    public status?: string;
    public tagline?: string;
    public title?: string;
    public video?: boolean;
    public voteAverage?: number;
    public voteCount?: number;

    constructor(movieDetails: IMovieDetails) {
        this.adult = movieDetails.adult;
        this.backdropPath = movieDetails.backdrop_path;
        this.belongsToCollection = movieDetails.belongs_to_collection;
        this.budget = movieDetails.budget;
        this.genres = movieDetails.genres;
        this.homepage = movieDetails.homepage;
        this.id = movieDetails.id;
        this.imdbId = movieDetails.imdb_id;
        this.originalLanguage = movieDetails.original_language;
        this.originalTitle = movieDetails.original_title;
        this.overview = movieDetails.overview;
        this.popularity = movieDetails.popularity;
        this.posterPath = movieDetails.poster_path;
        this.productionCompanies = movieDetails.production_companies;
        this.productionCountries = movieDetails.production_countries;
        this.releaseDate = movieDetails.release_date;
        this.revenue = movieDetails.revenue;
        this.runtime = movieDetails.runtime;
        this.spokenLanguages = movieDetails.spoken_languages;
        this.status = movieDetails.status;
        this.tagline = movieDetails.tagline;
        this.title = movieDetails.title;
        this.video = movieDetails.video;
        this.voteAverage = movieDetails.vote_average;
        this.voteCount = movieDetails.vote_count;
    }

}
