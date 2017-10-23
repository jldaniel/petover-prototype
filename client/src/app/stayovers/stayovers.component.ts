import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ServiceRequest } from '../api/ServiceRequest';
import { LoginService } from '../util/login.service';

@Component({
  templateUrl: './stayovers.component.html',
  styleUrls: ['./stayovers.component.css']
})
export class StayoversComponent implements OnInit {
  public stayoverRequests: ServiceRequest[] = [];

  constructor(private api: ApiService, private loginService: LoginService) {

  }


  // TODO Also retrieve the service provider and pet info for the service requests
  ngOnInit(): void {
    // Retrieve the users stay overs for display
    this.api.getServiceRequests(undefined, this.loginService.userId)
      .then(serviceRequests => {
        console.log('Service Requests retrieved');
        this.stayoverRequests = serviceRequests;
      }).catch(error => {
        console.error('Error retrieving service requests');
        console.error(error);
    });
  }



}
