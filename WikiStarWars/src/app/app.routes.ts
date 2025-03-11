import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PeopleComponent } from './component/people/people.component';
import { StarshipsComponent } from './component/starships/starships.component';
import { FilmsComponent } from './component/films/films.component';
import { VehiclesComponent } from './component/vehicles/vehicles.component';
import { SpeciesComponent } from './component/species/species.component';
import { PlanetsComponent } from './component/planets/planets.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'starships', component: StarshipsComponent},
    {path: 'films', component: FilmsComponent},
    {path: 'vehicles', component: VehiclesComponent},
    {path: 'species', component: SpeciesComponent},
    {path: 'planets', component: PlanetsComponent},
];
