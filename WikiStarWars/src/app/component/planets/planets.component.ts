import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../service/planets/planets.service';
import { IPlanets } from '../../interface/Planets';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent implements OnInit{

  constructor(private service: PlanetsService){}

  planets = <IPlanets>{};

  ngOnInit(){
    this.getPlanets();
  }

  getPlanets(){
    this.service.getPlanets().subscribe({
      next: (data) => {
        this.planets = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
