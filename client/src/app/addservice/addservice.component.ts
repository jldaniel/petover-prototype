import { Component } from '@angular/core';
import {LoginService} from '../util/login.service';
import {ApiService} from '../api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent {
  public serviceName: string;
  public serviceAbout: string;
  public serviceRate: number;
  public serviceRateType: string;
  public newServiceError = false;

  constructor(private router: Router, private api: ApiService, public loginService: LoginService) {

  }

  public addService(): void {
    console.log('AddserviceComponent.addService called');
    this.resetState();
    this.api.newService(this.loginService.userId, this.serviceName, this.serviceAbout, this.serviceRate, this.serviceRateType)
      .then(response => {
        console.log('New service created');
        console.log(response);
        this.router.navigate(['/services']);
      }).catch(error => {
        console.error('Error creating new service');
        console.error(error);
        this.newServiceError = true;
    });
  }

  private resetState(): void {
    console.log('AddserviceComponent.resetState called');
    this.newServiceError = false;
  }

}
