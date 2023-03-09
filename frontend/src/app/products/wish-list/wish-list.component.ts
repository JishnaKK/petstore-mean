import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishList: any
  emsg: string = ''
  constructor(private wishlist: WishlistService, private router: Router, private cartservice: CartService) { }
  ngOnInit(): void {
    this.wishlist.getWishList()
      .subscribe(
        (data: any) => {
          console.log("wish", data);
          this.wishList = data.wishlists
        },
        (data: any) => {
          this.emsg = data.error.message
        }
      )
  }


  removeitem(product: any) {
    this.wishlist.deletewish(product.id)
      .subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl("wish-list")

      }, (result: any) => {
        alert(result.error.message)

      })
  }

  addToCart(product: any) {
    this.cartservice.addToCart(product)
    this.removeitem(product)

  }

}
