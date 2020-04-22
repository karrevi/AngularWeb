import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss']
})
export class CategoriesAdminComponent implements OnInit {
public categories;

  constructor( public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll()
    .subscribe(res => {this.categories = res;
    console.log(this.categories)},
    error => console.error(error));
  }

}
