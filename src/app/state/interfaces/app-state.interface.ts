/* Interfaces */
import { ICreditsState } from "./credits-state.interface";
import { IDatesState } from "./dates-state.interface";
import { IMoviesState } from "./movies-state.interface";

export interface IAppState {
  credits: ICreditsState;
  dates: IDatesState;
  movies: IMoviesState;
}
