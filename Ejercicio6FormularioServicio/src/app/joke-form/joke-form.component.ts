import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Joke } from 'src/modelo/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  myForm: FormGroup;
  
  constructor() { }

  ngOnInit(){
    
    this.myForm = new FormGroup({
      enunciado: new FormGroup({
        setup: new FormControl('', [Validators.required, Validators.minLength(4)])
      }),
      respuesta: new FormGroup({
        punchline: new FormControl('', Validators.required)
      })
      
    });

  }

  @Output() crearChiste:EventEmitter<Joke> = new EventEmitter<Joke>();
  
  

  createJoke(setup: string, punchline: string) {
    let chisteNuevo:Joke = new Joke(setup, punchline);
    this.crearChiste.emit(chisteNuevo);
    this.myForm.controls.setup.valid;


  }
  
}
