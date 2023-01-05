import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgettiComponent } from './progetti/progetti.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ProgettiComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgettiComponent,
    HomeComponent
  ]
})
export class PagesModule { }
