import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Caretaker} from './caretaker';


@Injectable()
export class ApiService {
  private baseUrl = '/api';
  private caretakersUrl = this.baseUrl + '/caretakers';

  constructor(private http: Http) {
    console.log('ApiService.constructor called');
  }

  getCaretakers(): Promise<Caretaker[]> {
    console.log('ApiService.getCaretakers called');
    const headers = this.createHeaders();

    return this.http.get(this.caretakersUrl, {headers: headers}).toPromise()
      .then(response => response.json() as Caretaker[])
      .catch(error => this.handleError(error));
  }

  private createHeaders(): Headers {
    const headers = new Headers({'Content-Type': 'application/json'});
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
