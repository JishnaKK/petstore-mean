import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }


  addTowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
       price:product.price,
        description:product.description,
        brand:product.brand,
      image:product.image,



    }
    return  this.http.post('http://localhost:3000/addtowishlist/',body)
  }

  getWishList(){
  return  this.http.get('http://localhost:3000/getwishlist')
 }

 deletewish(id:any){
  return  this.http.delete('http://localhost:3000/deletewish/'+id)
 }
}
