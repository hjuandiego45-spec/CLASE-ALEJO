import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor(private ps: ProductService) {}

  eliminar(): void {
    this.ps.deleteProduct(this.product.id);
  }

}