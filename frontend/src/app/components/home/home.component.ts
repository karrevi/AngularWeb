import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products ;
  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllProducts();
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

}
