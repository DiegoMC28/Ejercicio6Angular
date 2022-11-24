import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/modelo/joke';
import { JokeServiceService } from 'src/modelo/joke-service.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  joke: Joke = new Joke('', '');
  jokes!: Joke[];

  constructor(private servicio: JokeServiceService) {
    this.jokes = this.servicio.jokes;
    this.servicio.jokes$.subscribe( jokes => this.jokes = jokes );
  }

  ngOnInit(): void {
    this.jokes = this.servicio.jokes;
    this.servicio.jokes$.subscribe( jokes => this.jokes = jokes );
  }

  //addJoke(joke: Joke) {
    //this.jokes.unshift(joke);
    //}
  

  }
