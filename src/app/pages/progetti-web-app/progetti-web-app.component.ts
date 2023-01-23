import { Component } from '@angular/core';

@Component({
  selector: 'app-progetti-web-app',
  templateUrl: './progetti-web-app.component.html',
  styleUrls: ['./progetti-web-app.component.css']
})
export class ProgettiWebAppComponent {

  progettiWebApp : any[] = [
    {
      titolo: 'Portfolio progetti',
    descrizione: `Questo Portfolio è stato realizzato utilizzando linguaggio HTML, CSS, Framework Bootstrap, Javascript, Jquery e il Framework Angular.`,
    link:'https://portfolio-4cf9e.web.app/',
    idCarosello:'carouselExampleIndicators',
    foto1:'../../../assets/img/carosello/1.png',
  foto2: '../../../assets/img/carosello/2.png',
  foto3: '../../../assets/img/carosello/3.png',
  foto4: '../../../assets/img/carosello/4.png',
  foto5: '../../../assets/img/carosello/5.png',
  foto6: '../../../assets/img/carosello/6.png',
  foto7: '../../../assets/img/carosello/7.png',
  foto8: '../../../assets/img/carosello/8.png'
    },
    {
      titolo: 'Project Work - Generation Italy',
    descrizione: `Questo progetto è stato realizzato al termine del corso erogato da Generation Italy per la figura Junior Java Developer, dove io mi sono occupato del lato Front End. Viene rappresentata una piattaforma dove le persone possono registrarsi e inserire le recensioni dei viaggi effettuati con relative foto (max 3 foto); l'admin dalla sua area può vedere se ci sono nuove recensioni in attesa di essere pubblicate e accettare di pubblicarle o meno visionando la recensione con la foto. Le persone che visiteranno il sito, sia persone registrate e non, dalla schermata Home possono visualizzare le recensioni e se vogliono filtrarle in base al luogo (Italia, Europa e Altro). Il tutto è stato progettato utilizzando il linguaggio: HTML, CSS, Framework Bootstrap, Javascript, Jquery, Framework Spring, Data Base MySQL.`,
    link:'https://github.com/ProtoR0/Project-Viaggi_Generation',
    idCarosello:'progettoGeneration',
    foto1:'../../../assets/img/carosello/caroselloProgettoGeneration/ProjectGeneration1.png',
  foto2: '../../../assets/img/carosello/caroselloProgettoGeneration/ProjectGeneration3.png',
  foto3: '../../../assets/img/carosello/caroselloProgettoGeneration/ProjectGeneration4.png',
  foto4: '../../../assets/img/carosello/caroselloProgettoGeneration/ProjectGeneration5.png',
  foto5: '../../../assets/img/carosello/caroselloProgettoGeneration/ProjectGeneration6.png', /* Inserire le foto del progetto */
  foto6: '../../../assets/img/carosello/caroselloProgettoGeneration/ProjectGeneration7.png',
  foto7: '../../../assets/img/carosello/caroselloProgettoGeneration/ProjectGeneration8.png',
  foto8: '../../../assets/img/carosello/caroselloProgettoGeneration/ProjectGeneration9.png'
    }
  ];
/*   ngOnInit() {
    this.progettiWebApp.reverse(); Per stampare l'array al contrario
  } */
}
