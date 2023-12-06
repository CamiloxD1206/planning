import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { PartidaComponent } from './partida/partida.component';
import { UserComponent } from './user/user.component';
import { BarraComponent } from './barra/barra.component';
import { LinkComponent } from './link/link.component';
import { BarraCartasComponent } from './barra-cartas/barra-cartas.component';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    PartidaComponent,
    UserComponent,
    BarraComponent,
    LinkComponent,
    BarraCartasComponent,
    TareaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule a las importaciones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
