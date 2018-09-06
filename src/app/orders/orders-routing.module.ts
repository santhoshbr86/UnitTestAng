import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from '../orders/order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
    children: [
      {
        path: 'order/:id',
        component: OrderDetailComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
