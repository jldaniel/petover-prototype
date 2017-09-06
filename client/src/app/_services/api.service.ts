import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  private splashUrl = '/api/splash';

  splashLogin(password: string): Promise<any> {
    console.log('ApiService.splashLogin called');
    const headers = new Headers();
    headers.append('Authentication', password);
    return this.http.get(this.splashUrl, {headers: headers})
      .toPromise();
  }

}
