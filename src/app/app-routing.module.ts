import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgettiAppComponent } from './pages/progetti-app/progetti-app.component';
import { ProgettiWebAppComponent } from './pages/progetti-web-app/progetti-web-app.component';
import { ProgettiComponent } from './pages/progetti/progetti.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'progetti', component: ProgettiComponent},
  {path:'progettiApp', component: ProgettiAppComponent},
  {path:'progettiWebApp', component: ProgettiWebAppComponent},
  {path:'contatti', component: ContattiComponent},
  {path:'cv', component: CvComponent},
  {path:'%%', component: HomeComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
