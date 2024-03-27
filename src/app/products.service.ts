import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponse, Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient) { }

  getProducts(page: number = 1, limit: number = 10): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>('http://localhost:3437/api/products?page=' + page + '&limit=' + limit);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3437/api/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3437/api/products', product);
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put<any>(`http://localhost:3437/api/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3437/api/products/${id}`, {observe: 'response'});
  }
}


