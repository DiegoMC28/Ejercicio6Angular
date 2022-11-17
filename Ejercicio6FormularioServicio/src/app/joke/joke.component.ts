import { Component, Input, OnInit } from '@angular/core';
import { Joke } from 'src/modelo/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  
  @Input('joke') data!: Joke;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
