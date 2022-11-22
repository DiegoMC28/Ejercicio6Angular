import { Injectable } from '@angular/core';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
  private jokes: Joke[]; 
  constructor( ) { 

    this.jokes =[
      new Joke("What did the cheese say when it looked in the mirror?", "Hellome (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
      ];
  }

  obtenerChistes(){
    return this.jokes;
  }

  añadirChistes(joke: Joke){
    this.jokes.unshift(joke);
  }
}
