import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';







@NgModule({
    declarations: [
        ProductsComponent,
        AllProductsComponent,
        CartComponent,
        WishListComponent,
        FilterPipe,
        UserLoginComponent,
        UserRegisterComponent,
    ],
    providers: [
        ApiService
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class ProductsModule { }
