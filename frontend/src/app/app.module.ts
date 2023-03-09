import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FooterComponent } from './footer/footer.component';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ProductsModule,
   HttpClientModule,
  AdminModule,
  FormsModule,
  ReactiveFormsModule



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
