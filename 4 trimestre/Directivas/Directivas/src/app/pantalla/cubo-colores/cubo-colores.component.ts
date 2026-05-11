import { Component } from '@angular/core';

type EstadoCarga = 'pendiente' | 'cargando' | 'exito';

@Component({
  selector: 'app-cubo-colores',
  templateUrl: './cubo-colores.component.html',
  styleUrl: './cubo-colores.component.scss'
})
export class CuboColoresComponent {

  estado: EstadoCarga = 'pendiente';
  elementos: string[] = [];

  cargarOBorrar(): void {
    if (this.estado === 'exito') {
      this.borrarDatos();
      return;
    }

    this.cargarDatos();
  }

  cargarDatos(): void {
    this.estado = 'cargando';
    this.elementos = [];

    setTimeout(() => {
      this.elementos = ['Angular', 'TypeScript', 'Java'];
      this.estado = 'exito';
    }, 2000);
  }

  borrarDatos(): void {
    this.elementos = [];
    this.estado = 'pendiente';
  }

  textoBoton(): string {
    return this.estado === 'exito' ? 'Borrar' : 'Cargar';
  }

}
