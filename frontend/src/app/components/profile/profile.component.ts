import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';
import { UserService } from 'src/app/user.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user;

  constructor(
    public ordersService: OrdersService,
    public userService: UserService,
    public productService: ProductService

  ) { }

  ngOnInit(): void {
  }

}
