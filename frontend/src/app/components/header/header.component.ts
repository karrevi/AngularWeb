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

  constructor(
    public userService: UserService,
    public router: Router,
    
    ) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.userService[' user'] = { };
  }
  searchProducts(event){
    console.log(event.target.search.value)
    const searchValue = event.target.search.value;
    this.router.navigate(['/products/search', searchValue]);
  }


}
