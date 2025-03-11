import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllStarships } from '../../interface/Starships';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  uri = "https://swapi.dev/api/starships";

  constructor(private http: HttpClient) { }

  public getAllStarships(){
    return this.http.get<IAllStarships>(this.uri);
  }
}
