import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OrdersService } from 'app/orders/orders.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css'],
  providers: [OrdersService]
})
export class ViewOrderComponent implements OnInit {

  orderId: number
  order: any
  errorMsg: any

  constructor(private orderService: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => this.orderId = params['id']
    )

    this.show()
  }

  show() {
    this.orderService.show(this.orderId).subscribe(
      res => this.order = res,
      error => this.errorMsg = error
    )
  }

}
