import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/services/route-guard.service';
import { ContattiSendComponent } from './pages/contatti-send/contatti-send.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginErrorComponent } from './pages/login-error/login-error.component';
import { LoginComponent } from './pages/login/login.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { ProgettiAppComponent } from './pages/progetti-app/progetti-app.component';
import { ProgettiTemplateMailComponent } from './pages/progetti-template-mail/progetti-template-mail.component';
import { ProgettiWebAppComponent } from './pages/progetti-web-app/progetti-web-app.component';
import { ProgettiComponent } from './pages/progetti/progetti.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'progetti', component: ProgettiComponent},
  {path:'progettiApp', component: ProgettiAppComponent},
  {path:'progettiWebApp', component: ProgettiWebAppComponent},
  {path:'templateMail', component: ProgettiTemplateMailComponent},
  {path:'contatti', component: ContattiComponent},
  {path:'contatti/sendMessage', component: ContattiSendComponent},
  {path:'cv', component: CvComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: PageAdminComponent, canActivate:[RouteGuardService]},
  {path:'err', component: LoginErrorComponent},
  {path:'%%', component: HomeComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
