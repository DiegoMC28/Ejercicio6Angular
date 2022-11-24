import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
  private _jokes: Joke[]; 

  private _jokes$: Subject<Joke[]>;



  constructor( ) { 

    this._jokes =[
      new Joke("What did the cheese say when it looked in the mirror?", "Hellome (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
      ];

    this._jokes$ = new Subject();
  }

  get jokes(): Joke[] {
    return [...this._jokes]
  }

  get jokes$(): Observable<Joke[]> {
    return this._jokes$.asObservable();
  }

  añadirChiste(joke: Joke){
    this._jokes.unshift(joke);
    this._jokes$.next([...this._jokes]);
  }
}
