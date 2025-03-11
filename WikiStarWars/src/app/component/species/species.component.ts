import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../service/species/species.service';
import { ISpecies } from '../../interface/Species';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [],
  templateUrl: './species.component.html',
  styleUrl: './species.component.css'
})
export class SpeciesComponent implements OnInit{

  constructor(private service: SpeciesService){}

  species = <ISpecies>{};

  ngOnInit() {
    this.getSpecies();
  }

  getSpecies(){
    this.service.getSpecies().subscribe({
      next: (data) => {
        this.species = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
