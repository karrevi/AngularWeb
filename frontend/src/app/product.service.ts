import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/products');
  }
  insert(product: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/products', product);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/products/' + id);
  }
  getProductsByCategory(categoryId) {
    return this.httpClient.get('http://localhost:3000/products/category/' + categoryId);
  }
  searchProducts(search) {
    return this.httpClient.get('http://localhost:3000/products/name/' + search);
  }
}

