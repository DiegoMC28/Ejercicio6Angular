import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Joke } from 'src/modelo/joke';
import { ReactiveFormsModule } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  myForm!: FormGroup;
  setupControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  punchlineControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  
  @Output() crearChiste:EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor() { 
    }

  ngOnInit(){
    
  


    this.myForm = new FormGroup({
       setup: this.setupControl,
      punchline: this.punchlineControl      
    });

  }


  createJoke(setup: string, punchline: string) {

    this.myForm.valid;
    this.setupControl?.valid;
    this.punchlineControl?.valid;
    if(this.myForm.valid && this.setupControl?.valid && this.punchlineControl?.valid){
      let chisteNuevo:Joke = new Joke(setup, punchline);
      this.crearChiste.emit(chisteNuevo);
    }
    
    
   
    
  }
  
}
