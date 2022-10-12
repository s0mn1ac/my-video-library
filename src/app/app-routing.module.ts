/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((module) => module.LoginComponentModule)
  },
  {
    path: 'board',
    loadChildren: () => import('./pages/board/board.module').then((module) => module.BoardComponentModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then((module) => module.MoviesComponentModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./pages/series/series.module').then((module) => module.SeriesComponentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
