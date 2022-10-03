/* Enums */
import { HeaderSection } from "../enums/header-section.enum";

export class Header {

    public board: boolean = false;
    public movies: boolean = false;
    public series: boolean = false;

    public setHeaderSelectedValue(section: HeaderSection): void {
        switch (section) {
            case HeaderSection.Board:
                this.board = true;
                this.movies = false;
                this.series = false;
                break;
            case HeaderSection.Movies:
                this.board = false;
                this.movies = true;
                this.series = false;
                break;
            case HeaderSection.Series:
                this.board = false;
                this.movies = false;
                this.series = true;
                break;
            default:
                break;
        }
    }
}
