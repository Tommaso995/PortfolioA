import { Component } from '@angular/core';

@Component({
  selector: 'app-progetti-template-mail',
  templateUrl: './progetti-template-mail.component.html',
  styleUrls: ['./progetti-template-mail.component.css']
})
export class ProgettiTemplateMailComponent {



  progettiApp : any[] = [
    {
      titolo: 'Clone Template Mail - Hollywood Kart',
      descrizione: `Questo Template è stato realizzato utilizzando linguaggio HTML, CSS. É un clone di una mail ricevuta da Hollywood Kart Campania nella giornata della festa della donna.`,
      linkOnline: 'https://charming-queijadas-61326a.netlify.app/',
      linkGitHub:'https://github.com/Tommaso995/CloneTemplateHollywoodKart',
      schermate: 'Schermate:',
      foto:'../../../assets/img/progetti/templatemail/hwk/hwk1.png',
      foto2: '../../../assets/img/progetti/templatemail/hwk/hwk2.png',
      id: 'TemplateHWK1',
      id2: 'TemplateHWK2',
      ariaLabelledby: 'TemplateHWK1Label',
      ariaLabelledby2: 'TemplateHWK2Label',
      titoloModal: 'Screenshot 1',
      titoloModal2: 'Screenshot 2'
  },
  {
    titolo: 'Clone Template Mail - Decathlon',
    descrizione: `Questo Template è stato realizzato utilizzando linguaggio HTML, CSS. É un clone di una mail ricevuta da Decathlon Campania.`,
    linkOnline: 'https://precious-crisp-dafd97.netlify.app/',
    linkGitHub:'https://github.com/Tommaso995/CloneTemplateDecathlon',
    schermate: 'Schermate:',
    foto:'../../../assets/img/progetti/templatemail/decathlon/decathlon1.png',
    foto2: '../../../assets/img/progetti/templatemail/decathlon/decathlon2.png',
    id: 'TemplateDecathlon1',
    id2: 'TemplateDecathlon2',
    ariaLabelledby: 'TemplateDecathlon1Label',
    ariaLabelledby2: 'TemplateDecathlon2Label',
    titoloModal: 'Screenshot 1',
    titoloModal2: 'Screenshot 2'
},
{
  titolo: 'Template Mail - Offerte Pasquali',
  descrizione: `Questo Template è stato realizzato utilizzando linguaggio HTML, CSS.`,
  linkOnline: 'https://stupendous-muffin-ffc2c1.netlify.app/',
  linkGitHub:'https://github.com/Tommaso995/TemplateMailOffertePasquali',
  schermate: 'Schermate:',
  foto:'../../../assets/img/progetti/templatemail/templateoffPasquali/mailam1.png',
  foto2: '../../../assets/img/progetti/templatemail/templateoffPasquali/mailam2.png',
  id: 'TemplateOffPasq1',
  id2: 'TemplateOffPasq2',
  ariaLabelledby: 'TemplateOffPasq1Label',
  ariaLabelledby2: 'TemplateOffPasq2Label',
  titoloModal: 'Screenshot 1',
  titoloModal2: 'Screenshot 2'
}
  ]

  ngOnInit(){
    this.progettiApp.reverse(); /* Stampo l'array contente i progetti al contrario */
  }
}
