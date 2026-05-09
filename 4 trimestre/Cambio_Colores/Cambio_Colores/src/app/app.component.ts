import { Component } from '@angular/core';
import { ColorSeleccionado } from './botones/cambiar-colores/cambiar-colores.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  colorCubo: string = 'white';
  nombreColorSeleccionado: string = 'Ninguno';

  cambiarColor(color: ColorSeleccionado): void {
    this.colorCubo = color.valor;
    this.nombreColorSeleccionado = color.nombre;
  }
}