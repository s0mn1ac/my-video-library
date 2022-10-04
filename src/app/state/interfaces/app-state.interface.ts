/* Interfaces */
import { IDatesState } from "./dates-state.interface";
import { IMoviesState } from "./movies-state.interface";

export interface IAppState {
  movies: IMoviesState;
  dates: IDatesState;
}
