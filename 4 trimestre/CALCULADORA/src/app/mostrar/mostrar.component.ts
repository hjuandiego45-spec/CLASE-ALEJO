import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.scss'
})
export class MostrarComponent {
  @Input() valor = '0';
}
