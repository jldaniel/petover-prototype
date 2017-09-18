import { Injectable } from '@angular/core';
import {User} from '../api/User';

@Injectable()
export class LoginService {
  private authString = null;
  public loggedIn = false;
  private user: User = null;
  public userId: number;

  constructor() {
    console.log('LoginService constructor called');
  }

  loginUser(user: User, authString: string) {
    this.user = user;
    this.authString = authString;
    this.loggedIn = true;
    this.userId = user.id;
  }

  logoutUser() {
    this.authString = null;
    this.user = null;
    this.loggedIn = false;
  }
}
