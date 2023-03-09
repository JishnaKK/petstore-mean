import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allProducts:any=[]
  searchKey:any
  constructor(private api:ApiService ,private wishlist:WishlistService, private cart:CartService){}


  ngOnInit(): void {
    
    this.api.getAllproducts()
    .subscribe((data:any)=>{
      console.log(data);
      this.allProducts=data.products

   this.allProducts.forEach((item:any)=>{
    Object.assign(item,{quantity:1,total:item.price})
   })
    })

    this.api.searchTerm.subscribe((data:any)=>{
      console.log('search:',data);

      this.searchKey=data
    })
  }

addTowishList(product:any){
this.wishlist.addTowishlist(product)
.subscribe((data:any)=>{
  console.log("wishlistdata:",data);

  alert(data.message)
},(data:any)=>{
  alert(data.error.message)
})
}


addToCart(product:any){
  this.cart.addToCart(product)
}

}
