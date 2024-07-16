import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  isLoading: boolean = false;
  isError: boolean = false;
  errorMsg: any;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}/),
    ]),
  });

  handleLogin(form: FormGroup) {
    this.isLoading = true;
    this._AuthService.login(form.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        this._Router.navigate(['/home']);
        localStorage.setItem('userToken', response.token);
        this._AuthService.decodeUserData();
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
        this.isError = true;
        this.errorMsg = err.error.errors.msg;
      },
    });
  }
}
