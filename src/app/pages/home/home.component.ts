import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titolo: string = 'Tommaso Magliocca';
  ruolo: string = 'Junior Developer';
  paragrafo: string = `Da sempre sono un appassionato di tutto ciò che
  riguarda l'informatica. Per coltivare la mia passione e
  per aumentare le mie competenze tecniche ho
  seguito dei corsi in ambito di programmazione. Ora
  sono pronto a mettermi in gioco per lavorare nel
  settore che mi piace.`


}
