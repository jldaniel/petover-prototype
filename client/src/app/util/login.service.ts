import { Injectable } from '@angular/core';
import {User} from '../api/User';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {
  private authString = null;
  public loggedIn = false;
  private user: User = null;
  public userId: number;

  constructor(private router: Router) {
    console.log('LoginService constructor called');
  }

  loginUser(user: User, authString: string) {
    console.log('LoginService.loginUser called');
    this.user = user;
    this.authString = authString;
    this.loggedIn = true;
    this.userId = user.id;
    this.router.navigate(['/dashboard']);
  }

  logoutUser() {
    console.log('LoginService.logoutUser called');
    this.authString = null;
    this.user = null;
    this.loggedIn = false;
    this.router.navigate(['/home']);
  }
}
