import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
constructor(private _AuthService:AuthService){}
isLogin:boolean = false
ngOnInit(): void {
this._AuthService.userData.subscribe({
  next:()=>{
    if(localStorage.getItem('userToken')!== null){
      this.isLogin = true
    }else{
      this.isLogin = false
    }
  }
})
}
logout(){
  this._AuthService.logout()
  // this.isLogin = false
}
}
