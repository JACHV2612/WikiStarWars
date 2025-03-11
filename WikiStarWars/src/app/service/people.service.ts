import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople, results } from '../interface/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  readonly uriAllSWPeople = "https://swapi.dev/api/people";
  //readonly uriAllSWPeople = "https://jsonplaceholder.typicode.com/users";

  //people: any[];

  constructor(private http: HttpClient) {
    //this.people = [];
  }

  public getAllPeople(){
    //return this.http.get<any[]>(this.uriAllSWPeople);
    return this.http.get<any[]>(this.uriAllSWPeople);
  }

}
