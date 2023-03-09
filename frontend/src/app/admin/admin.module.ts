import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { ProductsModule } from '../products/products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    ListComponent,
    LoginComponent,
    AdminNavbarComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class AdminModule { }
