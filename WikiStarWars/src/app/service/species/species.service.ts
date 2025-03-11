import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISpecies } from '../../interface/Species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  uri = "https://swapi.dev/api/species";

  constructor(private http: HttpClient) { }

  public getSpecies(){
    return this.http.get<ISpecies>(this.uri);
  }
}
