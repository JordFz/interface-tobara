import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import { MaterialModule } from './material.module';

//Estructura
import { EstructuraModule } from './estructura/estructura.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    EstructuraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
