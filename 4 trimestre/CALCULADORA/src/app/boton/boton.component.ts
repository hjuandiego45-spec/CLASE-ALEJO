import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss'
})
export class BotonComponent {
  @Input() texto = '';
  @Input() tipo = '';

  @Output() clickBoton = new EventEmitter<string>();

  enviar(): void {
    this.clickBoton.emit(this.texto);
  }
}
