import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit {
  products;

  constructor(
    public route: ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    console.log(this.route.params)
    this.route.params
    .subscribe(params => {
      this.productService.searchProducts(params.searchValue)
      .subscribe(
        (res: HttpResponse<any>) => {
          this.products = res;
        },
        (error: HttpErrorResponse) => console.log(error)
        );
      });
  }
}

