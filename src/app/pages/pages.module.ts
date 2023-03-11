import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgettiComponent } from './progetti/progetti.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { CvComponent } from './cv/cv.component';
import { CoreModule } from "../core/core.module";
import { ProgettiAppComponent } from './progetti-app/progetti-app.component';
import { ProgettiWebAppComponent } from './progetti-web-app/progetti-web-app.component';
import { ContattiSendComponent } from './contatti-send/contatti-send.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { LoginComponent, LoginComponentModule } from './login/login.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { ProgettiTemplateMailComponent } from './progetti-template-mail/progetti-template-mail.component';



@NgModule({
    declarations: [
        ProgettiComponent,
        HomeComponent,
        ContattiComponent,
        CvComponent,
        ProgettiAppComponent,
        ProgettiWebAppComponent,
        ContattiSendComponent,
        PageAdminComponent,
        ProgettiTemplateMailComponent
    ],
    exports: [
        ProgettiComponent,
        HomeComponent,
        ProgettiAppComponent,
        ProgettiWebAppComponent,
        ContattiSendComponent
    ],
    imports: [
        CommonModule,
        CoreModule /* FormsModule andava in conflitto con l'invio del form nella pagina contatti l'ho inserito solo dentro il file ts del component login e poi importato in app.module.ts*/,
        LoginComponentModule
    ]
})
export class PagesModule { }
