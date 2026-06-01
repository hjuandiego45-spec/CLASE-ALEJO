import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({providedIn:'root'})
export class ProductService {
  private products: Product[] = [];
  private nextId = 1;

  getProducts(): Product[] { return this.products; }

  addProduct(nombre:string, precio:number): void {
    this.products.push({id:this.nextId++, nombre, precio});
  }

  deleteProduct(id:number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
