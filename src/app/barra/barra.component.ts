import { Component, OnInit } from '@angular/core';
import { DatosPartidaService } from '../datos-service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  nombrePartida: string = '';

  constructor(private datosPartidaService: DatosPartidaService) {}

  ngOnInit() {
    this.datosPartidaService.nombrePartidaActual.subscribe(nombre => this.nombrePartida = nombre);
  }
}
