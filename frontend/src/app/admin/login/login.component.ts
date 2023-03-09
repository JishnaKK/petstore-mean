import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:any
  pswrd:any
  errormsg:boolean=false
 

  constructor(private route:Router, private fb:FormBuilder, private service:CrudService){
  }
  ngOnInit(): void {

   }
   loginCheck(){
    var userid:any=this.userId
    var pswd:any=this.pswrd
    this.service.adminLogin(userid,pswd)
    .subscribe ((result:any)=>{
      if(result){
      localStorage.setItem("adminname",JSON.stringify(result.adminname))
        this.route.navigateByUrl('list')
      }
    },(result=>{
      console.log(result.error.message)
      this.errormsg=true
    }))
  }

}
