import { Component, EventEmitter, Output } from '@angular/core';

export interface ColorSeleccionado {
  nombre: string;
  valor: string;
}

@Component({
  selector: 'app-cambiar-colores',
  templateUrl: './cambiar-colores.component.html',
  styleUrls: ['./cambiar-colores.component.scss'],
})
export class CambiarColoresComponent {
  @Output() colorSeleccionado = new EventEmitter<ColorSeleccionado>();

  colores: ColorSeleccionado[] = [
    { nombre: 'Rojo', valor: 'red' },
    { nombre: 'Azul', valor: 'blue' },
    { nombre: 'Amarillo', valor: 'yellow' },
    { nombre: 'Verde', valor: 'green' },
  ];

  seleccionarColor(color: ColorSeleccionado): void {
    this.colorSeleccionado.emit(color);
  }
}