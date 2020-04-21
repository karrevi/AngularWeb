import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  admins = ['admin'];
  public search: string;

  constructor(
    public userService: UserService,
    public router: Router,
    public route: ActivatedRoute,
    public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe((res => {
        this.categoryService.categories = res
      }))
  }
  searchProducts() {
    if (!this.search) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/products/search', this.search]);
    }
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.userService.setUser({});
    this.router.navigate(['']);
  }
}