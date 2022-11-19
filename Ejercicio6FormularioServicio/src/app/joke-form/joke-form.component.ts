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
  setup!: FormControl;
  punchline!: FormControl;
  
  @Output() crearChiste:EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor() { 
    }

  ngOnInit(){
    
    this.setup = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.punchline = new FormControl('', Validators.required);


    this.myForm = new FormGroup({
       setup: this.setup,
      punchline: this.punchline      
    });

  }


  createJoke(setup: string, punchline: string) {

    this.myForm.valid;
    this.setup?.valid;
    this.punchline?.valid;
    if(this.myForm.valid && this.setup?.valid && this.punchline?.valid){
      let chisteNuevo:Joke = new Joke(setup, punchline);
      this.crearChiste.emit(chisteNuevo);
    }
    
    
   
    
  }
  
}
