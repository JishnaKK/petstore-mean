import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsRoutingModule } from './products/products-routing.module';



const routes: Routes = [

  // const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }];
  { path: '', redirectTo: '/products',pathMatch:'full'},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)}
  // {path:'**',component:PageNotFoundComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
