import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {
  public products;
  public categories;
  public message: string;
  public category: number;
  public product = { id: 0, name: "", price: 0, image: "", CategoryId: 0 }

  constructor(
    public productService: ProductService,
    public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
    this.categoryService.getAll()
      .subscribe(res => { this.categories = res; },
        error => console.error(error));
  }

  getAll() {
    this.productService.getAll()
      .subscribe(res => {
        this.products = res;
        console.log(this.products)
      },
        error => console.error(error));
  }
  insertProduct(product) {
    this.productService.insert(product)
      .subscribe(res => {
        this.message = res.message;
        setTimeout(() => this.message = "", 2500);
        this.getAll();
      },
        error => {
          console.log(error);
          this.message = error.message;
          setTimeout(() => this.message = "", 2500);
        }
      )
  }
}
