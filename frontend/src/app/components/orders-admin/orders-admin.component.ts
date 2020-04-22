import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.scss']
})
export class OrdersAdminComponent implements OnInit {
  public orders;

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getAll()
    .subscribe(res => { this.orders = res;
    console.log(this.orders)},
    error => console.error(error));
  }

}
