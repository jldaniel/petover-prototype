import { Component , Inject , Input} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Http, Headers } from '@angular/http';
import {Service} from '../api/Service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'SEARCH PAGE:';
  addy = 'Somewhere over the rainbow';
  form: FormGroup;
  private serviceUrl = '/api/services';
  services: Service[];

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http) {
    console.log('SearchComponent constructor called');
    this.form = fb.group({
      address: ''
    });
  }

  private createHeaders(): Headers {
    const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getRadServices(): void {
    this.services = [];
    const homeUrl = this.serviceUrl + '?addy=' + '\%27' + this.form.value['address'] + '\%27' ;
    console.log('AppComponent.getRadServices called');
    const headers = this.createHeaders();
    this.http.get(homeUrl, {headers: headers}).toPromise()
      .then(response =>
        this.services = response.json() as Service[] )
      .catch(error => this.handleError(error));
  }

}
