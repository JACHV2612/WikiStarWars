import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../service/people.service';
import { Observable } from 'rxjs';
import { IPeople, results } from '../../interface/People';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit{
  constructor(public peopleService: PeopleService){}


  characters: any[] = [];

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople(){
    this.peopleService.getAllPeople().subscribe({
      next: (data) => {
        //this.peopleService.people = data;
        this.characters = data;        
        console.log(this.characters);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
