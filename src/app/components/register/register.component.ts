import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  isRegistered:boolean = false
  isLoading:boolean = false
  isError:boolean = false
  errorMsg:any;
  registerForm:FormGroup = new FormGroup({
  name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),
  rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),
  phone: new FormControl(null,[Validators.required,Validators.pattern(/^(002|\+2)?01[0125][0-9]{8}$/)]),
})

handleRegister(form:FormGroup){
  this.isLoading = true
  this._AuthService.register(form.value).subscribe({
    next:(response)=>{
      localStorage.setItem('userToken',response.token)
      this.isLoading=false
      this.isRegistered = true
      setTimeout(()=>{
        this._Router.navigate(['/login'])
      },1000)
    },
    error:(err)=>{
      this.isLoading=false
      console.log(err);
      this.isError = true
      this.errorMsg = err.error.errors.msg
    }
  })

}
}
