import { Product } from './model/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  products: Array<Product> = [
    { id: 1, name: 'Produkt 1' },
    { id: 2, name: 'Produkt 2' },
    { id: 3, name: 'Produkt 3' }
  ];

  viewMode = 'map';
  addRemoveProducts() {
    this.products.length === 0
      ? this.products.push(
          { id: 1, name: 'Produkt 1' },
          { id: 2, name: 'Produkt 2' },
          { id: 3, name: 'Produkt 3' }
        )
      : this.products.splice(0, this.products.length);
  }
  onAdd() {
    this.products.push({ id: 5, name: 'Produkt 5' });
  }
  onRemove(Product) {
    let index = this.products.indexOf(Product);
    this.products.splice(index, 1);
  }
  trackProduct(index, Product) {
    return Product ? Product.id : undefined;
  }
}
