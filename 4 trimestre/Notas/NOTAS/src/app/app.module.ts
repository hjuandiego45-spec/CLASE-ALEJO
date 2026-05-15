import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaComponent } from './pantalla/pantalla.component';
import { BotonesComponent } from './botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }