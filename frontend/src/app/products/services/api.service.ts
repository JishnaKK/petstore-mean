import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchTerm=new BehaviorSubject('')
  constructor(private http:HttpClient) { }

  getAllproducts(){
    return  this.http.get('http://localhost:3000/all-products')
   }

   getOneProduct(id:any){
return this.http.get('http://localhost:3000/getProduct/'+id)
   }

   login(email:any,password:any){
    const body={email,
      password}
    return this.http.post('http://localhost:3000/login',body)
  }



  register(fname:any,lname:any,email:any,pswd:any){
    const body={
      fname,lname,email,pswd
    }
    console.log(body);

    return this.http.post('http://localhost:3000/register',body)
  }
// addTowishlist(product:any){
//   const body={
//     id:product.id,
//     image:product.image,
//     title:product.title,
//     description:product.description,
//     brand:product.brand,
//     price:product.price
//   }
//   return  this.http.post('http://localhost:3000/addtowishlist/',body)
// }


// getWishList(){
//   return  this.http.get('http://localhost:3000/getwishlist')
//  }

}
