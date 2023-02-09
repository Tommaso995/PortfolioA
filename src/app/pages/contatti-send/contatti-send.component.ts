import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti-send',
  templateUrl: './contatti-send.component.html',
  styleUrls: ['./contatti-send.component.css']
})
export class ContattiSendComponent {
  titolo: string = 'Tommaso Magliocca';
  ruolo: string = 'Junior Developer';
  mail: string = 'tommaso.magliocca@gmail.com';
  telefono: number = 3473644674;
  linkedin: string = 'https://www.linkedin.com/in/tommaso-magliocca-281275154/';
}
