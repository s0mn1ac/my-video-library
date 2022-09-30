/* Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movie',
    loadChildren: () => import('./pages/movie/movie.module').then((module) => module.MovieComponentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesComponentRoutingModule {}
