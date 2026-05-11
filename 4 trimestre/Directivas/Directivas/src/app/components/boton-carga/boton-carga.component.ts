import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton-carga',
  templateUrl: './boton-carga.component.html',
  styleUrls: ['./boton-carga.component.scss']
})
export class BotonCargaComponent {

  @Input() estado: 'pendiente' | 'cargando' | 'exito' = 'pendiente';

  @Output() accion = new EventEmitter<void>();

  ejecutarAccion(): void {
    this.accion.emit();
  }

}