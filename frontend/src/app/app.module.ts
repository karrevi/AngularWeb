import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './container/container.component';
import { RegistrarseComponent } from './container/registrarse/registrarse.component';
import { MicuentaComponent } from './container/micuenta/micuenta.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './container/user/user.component';
import { ConfirmedComponent } from './container/user/confirmed/confirmed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    RegistrarseComponent,
    MicuentaComponent,
    HomeComponent,
    UserComponent,
    ConfirmedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
