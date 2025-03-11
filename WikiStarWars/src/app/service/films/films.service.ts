import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllFilms } from '../../interface/Films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  uri = "https://swapi.dev/api/films";

  constructor(private http: HttpClient) { }

  public getFilms(){
    return this.http.get<IAllFilms>(this.uri);
  }

}
