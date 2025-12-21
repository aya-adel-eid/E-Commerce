import { Component, inject, OnInit } from '@angular/core';
import { OrdersCardComponent } from '../../components/orders-card/orders-card.component';
import { OrderDetailsComponent } from '../../components/order-details/order-details.component';
import { OrdrsService } from '../../services/ordrs.service';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';

@Component({
  selector: 'app-orders-page',
  imports: [OrdersCardComponent, OrderDetailsComponent, LoadingScreenComponent],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css',
})
export class OrdersPageComponent implements OnInit {
  public readonly ordersServices = inject(OrdrsService);
  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders() {
    this.ordersServices.getOrders();
  }
}
