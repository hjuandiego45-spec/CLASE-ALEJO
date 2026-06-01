import { Component } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  nombre = '';
  precio = 0;

  constructor(private ps: ProductService){}

  crear(){
    this.ps.addProduct(this.nombre, this.precio);
    this.nombre = '';
    this.precio = 0;
  }

  valido(){
    return this.nombre.trim() !== '' && this.precio > 0;
  }

}