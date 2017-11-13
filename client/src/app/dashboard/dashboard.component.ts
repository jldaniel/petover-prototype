import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoginService } from '../util/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../api/User';
import { ServiceRequest } from '../api/ServiceRequest';
import {IStayover} from '../api/IStayover';



@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: User = new User();
  public providerNotifications: ServiceRequest[] = [];
  public requesterNotifications: ServiceRequest[] = [];

  constructor(public loginService: LoginService, private api: ApiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.api.getUser(this.loginService.userId)
      .then(user => this.user = user)
      .catch(error => {
        console.log('Error getting user profile');
        console.log(error);
        // TODO Handle this case, redirect to the home page maybe.
      });

    // Get the service requests where this user is the provider
    this.api.getServiceRequests(this.loginService.userId, null)
      .then(serviceRequests => {
        this.providerNotifications = serviceRequests;
        console.log('providerNotifications set');
        console.log(this.providerNotifications);
      })
      .catch(error => {
        console.log('Error getting service requests that this user is a provider for');
        console.log(error);
      });

    // Get the service request where this user is the requester
    this.api.getServiceRequests(null, this.loginService.userId)
      .then(serviceRequests => {
        this.requesterNotifications = serviceRequests;
        console.log('requesterNotifications set');
        console.log(this.requesterNotifications);
      }).catch(error => {
        console.log('Error getting service requests that this user is a requester for');
        console.log(error);
    });
  }

  public acceptRequest(requestId: number): void {
    console.log('Request: ' + requestId + ' has been accepted');
    this.api.updateServiceRequest(requestId, 'ACCEPTED')
      .then(serviceRequest => {
        console.log('ServiceRequest successufully accepted');
      }).catch(error => {
        console.error('Error accepting request');
        console.error(error);
    });

  }

  public denyRequest(requestId: number): void {
    console.log('Request: ' + requestId + ' has been denied');
    this.api.updateServiceRequest(requestId, 'DENIED')
      .then(serviceRequest => {
        console.log('ServiceRequest successufully accepted');
      }).catch(error => {
      console.error('Error denying request');
      console.error(error);
    });
  }


}
