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
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';



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
        LoginComponent
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
        CoreModule,
        FormsModule
    ]
})
export class PagesModule { }
