import { Component } from '@angular/core';

@Component({
  selector: 'app-progetti-app',
  templateUrl: './progetti-app.component.html',
  styleUrls: ['./progetti-app.component.css']
})
export class ProgettiAppComponent {


    progettiApp : any[] = [
      {
        titolo: 'Web-App - Segno Zodiacale',
        descrizione: `Questa web app è stata realizzata utilizzando linguaggio HTML, CSS, Framework Bootstrap e Javascript. Inserendo la propria data di nascita permette di sapere il proprio segno zodiacale.`,
        linkOnline: 'https://courageous-souffle-ee6bc9.netlify.app/',
        schermate: 'Schermate:',
        foto:'../../../assets/img/progetti/segnoZodiacale/1.png',
        foto2: '../../../assets/img/progetti/segnoZodiacale/2.png',
        id: 'Modal1Zodiac',
        id2: 'Modal2Zodiac',
        ariaLabelledby: 'Modal1ZodiacLabel',
        ariaLabelledby2: 'Modal2ZodiacLabel',
        titoloModal: 'Screenshot 1',
        titoloModal2: 'Screenshot 2'
    },
    {
      titolo: 'Web-App - Lista',
      descrizione: `Dove poter aggiungere i film da vedere con la relativa data e durata del film. Questa web-app è stata realizzata utilizzando linguaggio HTML, CSS, Framework Bootstrap e Javascript.`,
      linkOnline: 'https://glistening-figolla-16da4b.netlify.app/',
      schermate: 'Schermate:',
      foto:'../../../assets/img/webapp-lista/schermata lista film 1.png',
      foto2: '../../../assets/img/webapp-lista/schermata lista film 2.png',
      id: 'btnImage1',
      id2: 'btnImage2',
      ariaLabelledby: 'btnImage1Label',
      ariaLabelledby2: 'btnImage2Label',
      titoloModal: 'Screenshot 1',
      titoloModal2: 'Screenshot 2'
    },
    {
      titolo: 'Web-App - Pari o Dispari? Numero Primo?',
      descrizione: `Tramite questa web app è possibile vedere se il numero inserito è Pari o Dispari; oppure vedere se è un numero Primo.`,
      linkOnline: 'https://incomparable-crumble-7e2e8a.netlify.app/',
      schermate: 'Schermate:',
      foto:'../../../assets/img/webappNumPriDispPar/Screenpari1.png',
      foto2: '../../../assets/img/webappNumPriDispPar/Screen2 primo.png',
      id: 'btnpari1',
      id2: 'btnpari2',
      ariaLabelledby: 'btnPrimo1Label',
      ariaLabelledby2: 'btnPrimo2Label',
      titoloModal: 'Screenshot 1',
      titoloModal2: 'Screenshot 2'
    },
    {
      titolo: 'Web-App - Calcolatrice',
      descrizione: `Tramite questa web app è possibile usare la calcolatrice con tutte le sue funzioni principali.`,
      linkOnline: 'https://endearing-choux-7f28bf.netlify.app/',
      schermate: 'Schermate:',
      foto:'../../../assets/img/progetti/calcolatrice/screenCalcolatrice1.png',
      foto2: '../../../assets/img/progetti/calcolatrice/screenCalcolatrice2.png',
      id: 'btnCalcolatrice1',
      id2: 'btnCalcolatrice2',
      ariaLabelledby: 'btnCalcolatrice1Label',
      ariaLabelledby2: 'btnCalcolatrice2Label',
      titoloModal: 'Screenshot 1',
      titoloModal2: 'Screenshot 2'
    },
    {
      titolo: 'Web-App - Calcolatore area del Triangolo',
      descrizione: `Tramite questa web app è possibile calcolare l'aera del triangolo digitando le dimensioni dei 3 lati`,
      linkOnline: 'https://charming-raindrop-0fbba8.netlify.app/',
      schermate: 'Schermate:',
      foto:'../../../assets/img/progetti/areaTriangolo/screenarea1.png',
      foto2: '../../../assets/img/progetti/areaTriangolo/screenarea2.png',
      id: 'btnarea',
      id2: 'btnarea2',
      ariaLabelledby: 'btnarea1Label',
      ariaLabelledby2: 'btnarea2Label',
      titoloModal: 'Screenshot 1',
      titoloModal2: 'Screenshot 2'
    },
    {
      titolo: 'Web-App - Indovina il numero',
      descrizione: `Tramite questa web app è possibile digitare un numero e nel caso indovina il numero random vince.`,
      linkOnline: 'https://tubular-brigadeiros-03a07b.netlify.app/',
      schermate: 'Schermate:',
      foto:'../../../assets/img/progetti/indovinaNumeroRandom/screennumrandom1.png',
      foto2: '../../../assets/img/progetti/indovinaNumeroRandom/screennumrandom2.png',
      id: 'btnNumRandom',
      id2: 'btnNumRandom2',
      ariaLabelledby: 'btnNumRandom1Label',
      ariaLabelledby2: 'btnNumRandom2Label',
      titoloModal: 'Screenshot 1',
      titoloModal2: 'Screenshot 2'
    }
    ]

       ngOnInit() {
    this.progettiApp.reverse(); //Per stampare l'array al contrario
  }
}
