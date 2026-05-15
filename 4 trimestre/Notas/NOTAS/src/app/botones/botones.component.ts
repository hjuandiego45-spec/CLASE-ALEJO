import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.scss'
})
export class BotonesComponent {

  nuevaNota: string = '';

  @Output() notaAgregada = new EventEmitter<string>();

  agregarNota() {

    if(this.nuevaNota.trim() !== '') {

      this.notaAgregada.emit(this.nuevaNota);

      this.nuevaNota = '';

    }

  }

}