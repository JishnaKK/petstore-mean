import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/services/api.service';
import { CartService } from '../products/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItem=0
  user:any

  constructor(private api:ApiService ,private cart:CartService){
     console.log(this.user);

  }

  ngOnInit(): void {
    this.cart.getProducts().subscribe((data)=>{
this.totalItem=data.length
    })



  }
    search(event:any){
      console.log(event.target.value);
      let searchValue=event.target.value
      this.api.searchTerm.next(searchValue)




  }

  loggedIn(){
 return this.user =(localStorage.getItem('username')||'')

  }


  onLogout(){
    localStorage.removeItem('username')

  }

  adminlog(){
    return (localStorage.getItem('adminname')||'')


  }

  adminlogout(){
    localStorage.removeItem("adminname")
  }


}

