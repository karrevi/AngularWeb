import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {
  products;

  constructor(
    public route: ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.productService.getProductsByCategory(this.route.params['_value'].id)
          .subscribe(
            (res: HttpResponse<any>) => {
              this.products = res;
              console.log(this.products)
            },
            (error: HttpErrorResponse) => console.log(error)
          )
      });
  }
}
