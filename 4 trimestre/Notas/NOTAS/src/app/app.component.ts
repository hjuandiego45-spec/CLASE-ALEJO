import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  notas: string[] = [];

  agregarNota(nota: string) {
    this.notas.push(nota);
  }

  eliminarNota(index: number) {
    this.notas.splice(index, 1);
  }

}