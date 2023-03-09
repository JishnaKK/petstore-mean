import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/products/services/api.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allProducts: any = []
  id: any
  title: any
  price: any
  description: any
  brand: any
  image: any
  body: any
  showadd!: boolean;
  showupdate!: boolean;
  router: any;
  constructor(private api: ApiService, private http: CrudService, private activateRoute: ActivatedRoute, private route: Router) { }
  ngOnInit(): void {
    this.api.getAllproducts()
      .subscribe((data: any) => {
        console.log(data);
        this.allProducts = data.products


      });
    // this.getAllproduct()

  }

  // getAllproduct(){
  //   this.api.getAllproducts()
  //   .subscribe((data:any)=>{
  //     console.log(data);
  //     this.allProducts=data.products
  // })
  // }
  addProduct() {
    var id = this.id
    var title = this.title
    var price = this.price
    var description = this.description
    var brand = this.brand
    var image = this.image
    this.http.addProduct(id, title, price, description, brand, image)
      .subscribe((result: any) => {
        console.log(result);
        alert(result.message)
        window.location.reload()
      }, (result: any) => {
        alert(result.error.message)

      })

  }

  add() {

    this.showadd = true
    this.showupdate = false
  }

  update(item: any) {
    this.showadd = false
    this.showupdate = true
    this.id = (item.id)
    this.title = (item.title)
    this.price = (item.price)
    this.description = (item.description)
    this.brand = (item.brand)
    this.image = (item.image)
  }

  updateProduct() {
    var id = this.id
    var title = this.title
    var price = this.price
    var description = this.description
    var brand = this.brand
    var image = this.image
    this.http.updateProduct(id, title, price, description, brand, image).subscribe((data: any) => {
      console.log("data", data);

      alert(data.message)
      window.location.reload()
    }, (data: any) => {
      alert(data.error.message)
    })
  }
  deleteProduct(product: any) {
    this.http.deleteProduct(product.id)
      .subscribe((result: any) => {
        alert(result.message)
        window.location.reload()
      }, (result: any) => {
        alert(result.error.message)
      })
  }


}
