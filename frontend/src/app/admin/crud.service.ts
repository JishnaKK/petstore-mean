import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  adminCreate(uname: any, email: any) {
    const regbody = {
      "uname": uname,
      "email": email,

    }
    return this.http.post('http://localhost:3000/admin/register', regbody)
  }
  adminLogin(userid: any, pswd: any) {
    const logbody = {
      userid,
      pswd
    }
    return this.http.post('http://localhost:3000/admin/login', logbody)
  }

  addProduct(id: any, title: any, price: any, description: any, brand: any, image: any) {
    const body = {
      id,
      title,
      price,
      description,
      brand,
      image


    }
    return this.http.post('http://localhost:3000/addProduct/', body)
  }

  updateProduct(id: any, title: any, price: any, description: any, brand: any, image: any) {
    const body = {
      id, title, price, description, brand, image
    }
    console.log("update", body);

    return this.http.post('http://localhost:3000/UpdateProduct/', body)
  }

  deleteProduct(id: any) {
    return this.http.delete('http://localhost:3000/deleteProduct/' + id)
  }
}
