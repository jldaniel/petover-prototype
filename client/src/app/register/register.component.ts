import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  password: string;
  passwordCheck: string;
  passwordMismatchError = false;
  newUserSuccess = false;
  newUserError = false;

  constructor(private router: Router, private api: ApiService) {
    console.log('RegisterComponent.constructor called');
  }

  register(): void {
    console.log('RegisterComponent.register called');
    this.resetState();
    // Check that the passwords match
    if (this.password !== this.passwordCheck) {
      console.log('Passwords don\'t match');
      this.passwordMismatchError = true;
      this.password = '';
      this.passwordCheck = '';
      return;

    } else {
      // Try and create a new user resource
      this.api.newUser(this.email, this.password)
        .then(response => {
          console.log('New user created');
          console.log(response);
          // Display a message and a link to proceed to the login page
          // Maybe do something with a new user flag to take them to their profile
          this.newUserSuccess = true;
          this.router.navigate(['/login']);
        }).catch( error => {
          // Display an error message
          console.log('Error creating new user');
          console.log(error);
          this.newUserError = true;
      });
    }

  }

  /**
   * Reset the registration form state
   */
  private resetState(): void {
    console.log('Registration form state resetting');
    this.passwordMismatchError = false;
    this.newUserSuccess = false;
    this.newUserError = false;
  }

}
