import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  products: any[] = [];
  constructor(private productsService: ProductsService) {
     this.products = this.productsService.getProducts();
   }
}
