import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/modelo/joke';
import { JokeServiceService } from 'src/modelo/joke-service.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  jokes: Joke[];
  constructor(private servicio: JokeServiceService) {
    this.jokes = servicio.obtenerChistes();
  }

  //addJoke(joke: Joke) {
    //this.jokes.unshift(joke);
    //}
  

  }
