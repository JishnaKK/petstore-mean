import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
  })
  constructor(private fb:FormBuilder,private http:ApiService,private route:Router){}
userary:any
  ngOnInit(): void {

  }

  login(){
    var email=this.loginForm.value.email
    var password=this.loginForm.value.password
    if(this.loginForm.valid){
      this.http.login(email,password)
      .subscribe((data:any)=>{
        console.log(data);
        alert(data.message)
        localStorage.setItem("username",JSON.stringify(data.username))
        this.route.navigateByUrl('')

      },(data:any)=>{
        alert(data.error.message)
      }
      )

    }else{
      alert("invalid form")

    }
        }
}
