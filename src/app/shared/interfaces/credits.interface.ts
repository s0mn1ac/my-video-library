import { ICast } from "./cast.interface";
import { ICrew } from "./crew.interface";

export interface ICredits {
    id: number;
    cast: ICast[];
    crew: ICrew[];
}
