import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  admins = ['admin'];
  public search: string
  constructor(
    public userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.userService[' user'] = {};
  }

  searchProducts() {
    if (!this.search) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/products/search', this.search]);
    }

  }

}
