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
  foto1:'../../../assets/img/carosello/1.png',
  foto2: '../../../assets/img/carosello/2.png',
  foto3: '../../../assets/img/carosello/3.png',
  foto4: '../../../assets/img/carosello/4.png',
  foto5: '../../../assets/img/carosello/5.png',
  foto6: '../../../assets/img/carosello/6.png',
  foto7: '../../../assets/img/carosello/7.png',
  foto8: '../../../assets/img/carosello/8.png'
    },
  ]
}
