import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('userToken') !== null){
      this.decodeUserData()
    }
  }
userData = new BehaviorSubject(null)
headers:any ={token: localStorage.getItem('userToken')}
decodeUserData(){
  let incodedToken = JSON.stringify(localStorage.getItem('userToken'))
  let decodedToken:any = jwtDecode(incodedToken)
  this.userData.next(decodedToken)
  console.log(this.userData);
  
}
  register(userData:any):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  }
  login(userData:any):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
  }
  forgetPassword(userData:any):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',userData)
  }
  varifyResetCode(userData:any):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',userData)
  }
  resetPassword(userData:any):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',userData)
  }
  changePassword(changeform:any):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',changeform,{
      headers:this.headers
    })
  }
  changeData(changeform:any):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/',changeform,{
      headers:this.headers
    })
  }
  logout(){
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['/login'])

  }
}
