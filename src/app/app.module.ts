import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { ServerDetailComponent } from './components/server-detail/server-detail.component';
import { ServersComponent } from './components/servers/servers.component';
import {PageNotfoundComponent} from './components/page-notfound/page-notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,MatInputModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reduces/customer.reducers';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LoginComponent,
    ServerDetailComponent,
    ServersComponent,
    PageNotfoundComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({
      customer:reducer
    }),
    MatMenuModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
