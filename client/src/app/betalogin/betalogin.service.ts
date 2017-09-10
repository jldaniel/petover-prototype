import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BetaloginService {

  private loginUrl = '/betalogin';
  private authHeader = 'Authentication';

  constructor(private http: Http) {
    console.log('BetaloginService.constructor called');
  }

  login(password: string): Promise<any> {
    console.log('BetaloginService.login called');
    const headers = new Headers();
    headers.append(this.authHeader, password);

    return this.http.get(this.loginUrl, {headers: headers})
      .toPromise();
  }



}
