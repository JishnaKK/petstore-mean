import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartItemList = new BehaviorSubject([])
cartItemListArray:any=[]


 constructor() {}
// to get cart item to component
getProducts(){
return  this.cartItemList.asObservable()
}


addToCart(product:any){
this.cartItemListArray.push(product)
this.cartItemList.next(this.cartItemListArray)
this.getTotalPrice()
console.log("now",this.cartItemListArray);


}

getTotalPrice(){

  let total=0
  let price=
  this.cartItemListArray.map((item:any)=>{
    total+=item.price*item.quantity

    console.log("total",total);

  })
  return total

}
removeItemCart(product:any){
  this.cartItemListArray.map((item:any,index:any)=>{
    if(product.id===item.id){
      this.cartItemListArray.splice(index,1)
    }
  })
  this.cartItemList.next(this.cartItemListArray)
}

removeAllItem(){
  this.cartItemListArray=[]
  this.cartItemList.next(this.cartItemListArray)
}

// checkout- apply 15% when cart is more than two items

}

