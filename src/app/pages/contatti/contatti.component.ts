import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  titolo: string = 'Tommaso Magliocca';
  ruolo: string = 'Junior Front End Developer';
  mail: string = 'tommaso.magliocca@gmail.com';
  telefono: number = 3473644674;
  linkedin: string = 'https://www.linkedin.com/in/tommaso-magliocca-281275154/';
}
