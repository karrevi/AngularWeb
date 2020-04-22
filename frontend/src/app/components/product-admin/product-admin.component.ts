import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {
  public products;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
    .subscribe( res => { this.products = res;
    console.log(this.products)},
    error => console.error(error));
  }

}
