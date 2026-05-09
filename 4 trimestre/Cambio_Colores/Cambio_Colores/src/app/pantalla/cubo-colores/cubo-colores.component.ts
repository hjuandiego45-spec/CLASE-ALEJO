import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cubo-colores',
  templateUrl: './cubo-colores.component.html',
  styleUrls: ['./cubo-colores.component.scss'],
})
export class CuboColoresComponent {
  @Input() colorCubo: string = 'white';
}