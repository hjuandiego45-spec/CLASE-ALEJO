import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
styleUrl: './pantalla.component.scss'
})
export class PantallaComponent {

  @Input() notas: string[] = [];

  @Output() notaEliminada = new EventEmitter<number>();

  eliminarNota(index: number) {

    this.notaEliminada.emit(index);

  }

}