import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoginService } from '../util/login.service';
import { User } from '../api/User';
import { RequestState, ServiceRequest } from '../api/ServiceRequest';
import { DefaultImage } from '../util/DefaultImage';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: User = new User();
  public providerNotifications: ServiceRequest[] = [];
  public requesterNotifications: ServiceRequest[] = [];
  public defaultImage = new DefaultImage();

  constructor(public loginService: LoginService, private api: ApiService) {

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

        // Populate the notifications tab only if the request is pending
        for (const serviceRequest of serviceRequests) {
          if (serviceRequest.request_state === RequestState.PENDING) {
            this.providerNotifications.push(serviceRequest);
          }
        }

        console.log('pending provider notifications');
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
}
