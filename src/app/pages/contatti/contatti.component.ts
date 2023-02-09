import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  titolo: string = 'Tommaso Magliocca';
  ruolo: string = 'Junior Developer';
  mail: string = 'tommaso.magliocca@gmail.com';
  telefono: number = 3473644674;
  linkedin: string = 'https://www.linkedin.com/in/tommaso-magliocca-281275154/';
/*
  /* Controllo invio form 
  controllo: boolean = false;
  title = document.querySelector("#titolo");
  mal = document.querySelector("#mail");
  message = document.querySelector("#message");

  click(){  /* controllo in questo modo funziona, solo che comunque reindirizza alla pagina json back end

    if(this.title && this.mail && this.message){
      this.controllo = true
    } else {
      this.controllo = false
    }
  }

  ngOnInit(){

    this.click()


  } */
}

