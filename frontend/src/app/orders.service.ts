import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(' http://localhost:3000/orders');
  }
  insert(token, order): Observable<any> {
    return this.httpClient.post('http://localhost:3000/orders', order, {
      headers: { authorization: token }
    });
  }
}
