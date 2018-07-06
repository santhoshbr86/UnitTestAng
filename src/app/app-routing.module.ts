import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ServerDetailComponent } from './components/server-detail/server-detail.component';
import { ServersComponent } from './components/servers/servers.component';
import {PageNotfoundComponent} from './components/page-notfound/page-notfound.component';
const approutes:Routes = [
  {path:'servers', component:ServersComponent},
  {
    path: 'customers',
    loadChildren: '../app/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: '../app/orders/orders.module#OrdersModule'
  },
  {path:'serverDetail', component:ServerDetailComponent},
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes),
  ],
  declarations: []
})
export class AppRoutingModule { }
