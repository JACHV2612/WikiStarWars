import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PeopleComponent } from './component/people/people.component';
import { StarshipComponent } from './component/starship/starship.component';
import { MoviesComponent } from './component/movies/movies.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'starships', component: StarshipComponent},
    {path: 'movies', component: MoviesComponent},
];
