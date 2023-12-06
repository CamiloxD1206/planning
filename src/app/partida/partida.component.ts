import { Component } from '@angular/core';
import { DatosPartidaService } from '../datos-service';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent {
  nombrePartida: string = '';

  constructor(private datosPartidaService: DatosPartidaService) {}

  guardarDatos() {

    if (this.nombrePartida.length < 5 || this.nombrePartida.length > 20) {
      alert('El nombre debe tener entre 5 y 20 caracteres.');
      return;
    }

    
    const caracteresEspeciales = /[_.*#/-]/;
    if (caracteresEspeciales.test(this.nombrePartida)) {
      alert('El nombre no puede contener caracteres especiales (_.*#/-).');
      return;
    }

  
    const numerosEnNombre = this.nombrePartida.match(/\d/g);
    if (numerosEnNombre && numerosEnNombre.length > 3) {
      alert('El nombre no puede tener más de 3 números.');
      return;
    }

    if (/^\d+$/.test(this.nombrePartida)) {
      alert('El nombre no puede consistir solo en números.');
      return;
    }

    this.datosPartidaService.actualizarNombrePartida(this.nombrePartida);

   
  }
}
