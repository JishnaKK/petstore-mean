import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm=this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    lname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
  })
constructor(private fb:FormBuilder,private route:Router,private http:ApiService){}
  ngOnInit(): void {

  }
  register(){
    var firstname=this.registerForm.value.fname
    var lastname=this.registerForm.value.lname
    var email=this.registerForm.value.email
    var password=this.registerForm.value.pswd
    if(this.registerForm.valid){
    this.http.register(firstname,lastname,email,password)
    .subscribe((result:any)=>{
      console.log(result);
      alert(result.message)
    this.route.navigateByUrl('login')
    },(result:any)=>{
      alert(result.error.message)
    })
    }
    }
}
