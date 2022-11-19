import { Joke } from "./joke";

import { Injectable } from '@angular/core';
import { JokeFormComponent } from "src/app/joke-form/joke-form.component";

@Injectable({
  providedIn: JokeFormComponent
})

export class Servicio {

private arrayJokes : Array<Joke>;

constructor(){
    this.arrayJokes = [new Joke("What did the cheese say when it looked in the mirror?", "Hellome (Halloumi)"),
        new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
        new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
        ];
}

añadirJoke(joke : Joke){

    this.arrayJokes.unshift(joke);
}

public get getArrayJokes(){
    return this.arrayJokes;
}

}
