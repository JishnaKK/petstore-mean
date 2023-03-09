import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'view/:id', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wish-list', component:WishListComponent},

  {path:'login',component:UserLoginComponent},
  {path:'register',component:UserRegisterComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
