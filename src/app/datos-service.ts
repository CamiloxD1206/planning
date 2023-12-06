import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosPartidaService {
  private nombrePartidaFuente = new BehaviorSubject<string>('');
  nombrePartidaActual = this.nombrePartidaFuente.asObservable();

  actualizarNombrePartida(nombre: string) {
    this.nombrePartidaFuente.next(nombre);
  }
}

//-----------------------

