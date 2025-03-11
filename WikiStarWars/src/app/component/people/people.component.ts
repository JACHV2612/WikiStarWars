import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../service/people.service';
import { Observable } from 'rxjs';
import { IAllPeople } from '../../interface/People';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit{
  constructor(public peopleService: PeopleService){}


  characters = <IAllPeople>{};

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
