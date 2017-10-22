import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { LoginService } from '../util/login.service';
import { ApiService } from '../api/api.service';
import { User } from '../api/User';
import { Service } from '../api/Service';


@Component({
  selector: 'app-root',
  templateUrl: './servicerequest.component.html',
  styleUrls: ['./servicerequest.component.css']
})
export class ServicerequestComponent implements OnInit {
  public requestingUser: User = null;
  public providingUser: User = null;
  public service: Service = null;

  // Form data
  public startDate: Date = null;
  public endDate: Date = null;
  public message: string = null;
  public petId: number = null;

  /**
   * Constructor
   * @param {LoginService} loginService
   * @param {ApiService} api
   * @param {ActivatedRoute} route
   */
  constructor(private loginService: LoginService, private api: ApiService, private route: ActivatedRoute, private router: Router) {
  }


  /**
   * Called on form submission to submit a service request
   */
  public requestService(): void {
    const requesterId = this.requestingUser.id;
    const providerId = this.providingUser.id;
    const serviceId = this.service.id;


    this.api.createServiceRequest(requesterId, providerId, serviceId, this.startDate, this.endDate, this.message, this.petId)
      .then(serviceRequest => {
        console.log('ServicerequestComponent service request successfully created');
        console.log(serviceRequest);
        this.router.navigate(['/stayovers']);
        // TODO Handle redirection to users dashboard
      })
      .catch(error => {
        // TODO Handle error
        console.error('ServicerequestComponent error creating service request');
        console.error(error);
      });
  }

  ngOnInit(): void {
    // Get the service id from the url parameter and retrieve the service and service provider
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);

      const serviceId = params['id'];

      this.api.getService(serviceId)
        .then(service => {
          this.service = service;

          this.api.getUser(service.user_id)
            .then(user => {
              this.providingUser = user;
            })
            .catch(error => {
              // TODO Handle error
              console.error('Unable to retrieve the service provider');
              console.error(error);
            });
        })
        .catch(error => {
          // TODO Handle error
          console.error('Unable to retrieve the requested service');
          console.error(error);
        });
    });

      // Get the current user data
      this.api.getUser(this.loginService.userId)
        .then(user => this.requestingUser = user)
        .catch(error => {
          // TODO Handle error
          console.error(error);
        });

      // Get the Service data
  }


}
