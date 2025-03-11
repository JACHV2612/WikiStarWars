import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllPeople } from '../../interface/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  readonly uriAllSWPeople = "https://swapi.dev/api/people";
  //readonly uriAllSWPeople = "https://jsonplaceholder.typicode.com/users";
  
  constructor(private http: HttpClient) {}

  public getAllPeople(){
    return this.http.get<IAllPeople>(this.uriAllSWPeople);
  }

}
