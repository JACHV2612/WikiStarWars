import { Component, OnInit } from '@angular/core';
import { IAllFilms } from '../../interface/Films';
import { FilmsService } from '../../service/films/films.service';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit{

  constructor(private service: FilmsService){}

  films = <IAllFilms>{};

  ngOnInit(){
    this.getAllFIlms();
  }

  getAllFIlms(){
    this.service.getFilms().subscribe({
      next: (data) => {
        this.films = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
