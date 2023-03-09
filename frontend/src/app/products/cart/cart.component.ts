import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts:any=[]
  totalPrice:number=0
  totalItem=0
discount: number=0
discountPrice: number=0
  constructor(private cartservice:CartService,private router:Router){

  }
  ngOnInit(): void  {
    // this.carts=JSON.parse(localStorage.getItem("cartlist")||'')

this.cartservice.getProducts().subscribe((data)=>{
console.log("cart data:",data);
this.carts=data

this.totalItem=data.length

this.totalPrice=this.cartservice.getTotalPrice()

if(this.carts.length>=2){
  this. discount=(this.totalPrice*30)/100
this.discountPrice=this.totalPrice-this.discount
}
else{
  this.discountPrice=this.totalPrice
}
})

}
removeItemCart(item:any){
  this.cartservice.removeItemCart(item)
}
removeAllItem(){
  this.cartservice.removeAllItem()
}
checkOut(){
   alert(`You will save ${this.discount}  on this order`)
   this.removeAllItem()
this.router.navigateByUrl("")

  }

  // incrementQuantity(item:any){ }

  // decrementQuantity(item:any){}
}



