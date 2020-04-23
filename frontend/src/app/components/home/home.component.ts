import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';
import { ProductService } from 'src/app/product.service';
import { error } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products;
  public successMsg="";

  constructor(public httpClient: HttpClient, public userService:UserService,
    public productService: ProductService ) { }

  ngOnInit(): void {
    this.getAllProducts();const token: string = localStorage.getItem('authToken');
    if (token) {
      this.userService.getUserInfo(token)
        .subscribe(
          (res) => {this.userService.setUser(res); },
          (error) => {
            console.error(error);
            localStorage.removeItem('authToken');
          }
        )
    }
  }
  getAllProducts() {
    this.httpClient.get('http://localhost:3000/products')
      .subscribe(
        res => {
          this.products = res;
        },
        error => console.log(error)
      );

  }
  quitarItems(productId){
    this.productService.delete(productId)
    .subscribe(
      (res)=>{
        this.successMsg= res ['message'];
        setTimeout(() =>{
          this.successMsg="";
        }, 2000);
        this.productService.getAll()
        .subscribe(res => {
          this.products = res;},
          error => console.log(error));
      }
    )
  }

}
