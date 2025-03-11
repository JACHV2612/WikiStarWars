import { Component, OnInit } from '@angular/core';
import { VechiclesService } from '../../service/vehicles/vechicles.service';
import { IVehicles } from '../../interface/Vehicles';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent implements OnInit{

  constructor(private service: VechiclesService){}

  vehicles = <IVehicles>{};

  ngOnInit(){
    this.getAllVehicles();
  }

  getAllVehicles(){
    this.service.getVehicles().subscribe({
      next: (data) => {
        this.vehicles = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
