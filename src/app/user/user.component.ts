import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  nombreUsuario: string = '';
  opcionSeleccionada: string = ''; 

  guardarDatos() {
    console.log("Nombre de usuario:", this.nombreUsuario);
    console.log("Opción seleccionada:", this.opcionSeleccionada);
  
  }
}
