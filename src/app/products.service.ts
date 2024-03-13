import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      createdAt: new Date()
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      createdAt: new Date()
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      createdAt: new Date()
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      createdAt: new Date()
    }
  ];


  constructor() { }

  getProducts() {
    return this.products
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
