import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavProjectComponent } from './nav-project/nav-project.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavProjectComponent
  ]
})
export class CoreModule { }
