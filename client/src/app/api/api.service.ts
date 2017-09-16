import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from './User';


@Injectable()
export class ApiService {
  private baseUrl = '/api';
  private loginUrl = '/api/login';
  private usersUrl = this.baseUrl + '/users';
  private caretakersUrl = this.baseUrl + '/caretakers';

  constructor(private http: Http) {
    console.log('ApiService.constructor called');
  }

  /**
   * Method used to login a user via the REST API
   *
   * @param {string} email The user's email that was used during account creation
   * @param {string} password The user's password
   * @returns {Promise<User>} A promise containing the user model
   */
  login(email: string, password: string): Promise<User> {
    console.log('ApiService.login called');
    const headers = this.createHeaders();

    return this.http.get(this.loginUrl, {headers: headers}).toPromise()
      .then(response => response.json() as User)
      .catch(error => this.handleError(error));
  }

  /**
   * Get all users. In the future this method will need to be modified to include search
   * parameters
   *
   * @returns {Promise<User[]>} A list of users
   */
  getUsers(): Promise<User[]> {
    console.log('ApiService.getUsers called');
    const headers = this.createHeaders();

    return this.http.get(this.usersUrl, {headers: headers}).toPromise()
      .then(response => response.json() as User[])
      .catch(error => this.handleError(error));
  }

  /**
   * Get a specified user
   *
   * @param {number} id The ID of the user
   * @returns {Promise<User>} The requested user
   */
  getUser(id: number): Promise<User> {
    console.log('ApiService.getUser called');
    const headers = this.createHeaders();

    return this.http.get(this.usersUrl + '/' + id.toString(), {headers: headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(error => this.handleError(error));
  }


  /**
   * Put together the headers for the REST request
   *
   * @returns {Headers}
   */
  private createHeaders(): Headers {
    const headers = new Headers({'Content-Type': 'application/json'});
    return headers;
  }

  /**
   * Handle a request error
   *
   * @param error The error from the request
   * @returns {Promise<any>} The rejected promise
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
