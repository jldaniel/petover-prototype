import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api/api.service';
import { LoginService } from '../util/login.service';
import { User } from '../api/User';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loginError = false;


  constructor(private router: Router, private api: ApiService, private loginService: LoginService) {
    console.log('AboutComponent.constructor called');
  }

  login(): void {
    console.log('LoginComponent.login called');
    this.loginError = false;
    this.api.login(this.email, this.password)
      .then(response => {
        console.log('User login success');
        this.email = '';
        this.password = '';
        const user: User = response;
        // TODO Move auth string handling to a central place
        this.loginService.loginUser(user, btoa(this.email + '|' + this.password));
        this.router.navigate(['/home']);
      }).catch(error => {
        console.log('Login error');
        this.password = '';
        this.loginError = true;
        this.loginService.logoutUser();
    });
  }

}
