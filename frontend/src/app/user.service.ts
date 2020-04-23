import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token = '';
  public users: object = {};

  constructor(public httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('http://localhost:3000/users');
  }
  micuenta(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/login', user);
  }
  registrarse(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/register', user);
  }
  // createuser(user: object): Observable<any> {
  //   return this.httpClient.post('http://localhost:3000/users/regsiter', user);
  // }
  setToken(token: string): void {
    this.token = token;
  }
  getToken(): string {
    return this.token;
  }
  setUser(user: object): void {
    this.users = user;
  }
  getUser(): object {
    return this.users;
  }
  deleteUser(id:string|number, token:string){
    return this.httpClient.delete(`http://localhost:3000/users/delete/${id}`, {
      headers: {
        authorization: token
      }
    });
  }
  getUserInfo(token) {
    return this.httpClient.get('http://localhost:3000/users/info', {
      headers: {
        authorization: token
      }
    });
  }
}

