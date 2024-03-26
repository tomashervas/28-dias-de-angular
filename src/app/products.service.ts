import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3437/api/products');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3437/api/products/${id}`);
  }
}
