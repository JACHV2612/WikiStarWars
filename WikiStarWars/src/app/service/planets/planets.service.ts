import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlanets } from '../../interface/Planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  uri = "https://swapi.dev/api/planets";

  constructor(private http: HttpClient) { }

  public getPlanets(){
    return this.http.get<IPlanets>(this.uri);
  }
}
