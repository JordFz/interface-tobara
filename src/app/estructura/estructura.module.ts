import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule} from '../material.module';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { PageComponent } from './page/page.component';



@NgModule({
  declarations: [MenuComponent, SidenavComponent, ContenidoComponent, PageComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    SidenavComponent,
    ContenidoComponent,
    PageComponent
  ]
})
export class EstructuraModule { }
