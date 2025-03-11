import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVehicles } from '../../interface/Vehicles';

@Injectable({
  providedIn: 'root'
})
export class VechiclesService {

  uri = "https://swapi.dev/api/vehicles";

  constructor(private http: HttpClient) { }

  public getVehicles(){
    return this.http.get<IVehicles>(this.uri);
  }
}
