import { Component, OnInit } from '@angular/core';
import { IAllStarships } from '../../interface/Starships';
import { StarshipsService } from '../../service/starships/starships.service';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css'
})
export class StarshipsComponent implements OnInit{

  constructor(private service: StarshipsService){}
  starships = <IAllStarships>{};

  ngOnInit(){
    this.getAllStarships();
  }

  getAllStarships(){
    this.service.getAllStarships().subscribe({
      next: (data) => {
        this.starships = data;
      },
      error:(error) => {
        console.log(error);
      }
    });
  }
}
