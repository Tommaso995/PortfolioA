import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { PagesModule } from "./pages/pages.module";
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { LoginComponentModule } from './pages/login/login.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        PagesModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        LoginComponentModule /* Questo componente ha il formsModule importato nel file ts del componente login */
    ]
})
export class AppModule { }
