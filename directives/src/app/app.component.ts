import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  products = <any>[1, 2];
  addRemoveProducts() {
    this.products.length === 0
      ? this.products.push(1, 2)
      : this.products.splice(0, this.products.length);
  }
}
