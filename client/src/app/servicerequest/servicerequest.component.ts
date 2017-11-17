import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../util/login.service';
import { ApiService } from '../api/api.service';
import { User } from '../api/User';
import { Service } from '../api/Service';
import {Pet} from '../api/Pet';
import {ServicePrice} from '../util/ServicePrice';


@Component({
  selector: 'app-root',
  templateUrl: './servicerequest.component.html',
  styleUrls: ['./servicerequest.component.css']
})
export class ServicerequestComponent implements OnInit {
  public requestingUser: User;
  public providingUser: User;
  public service: Service;

  // Form data
  public startDate: Date = null;
  public endDate: Date = null;
  public message: string = null;
  public pets: Pet[] = [];
  public petId: number = null;

  // Price data
  public serviceCostString = ' ';


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
      })
      .catch(error => {
        // TODO Handle error
        console.error('ServicerequestComponent error creating service request');
        console.error(error);
      });
  }

  /**
   * Update the estimated price for the service when the button is clicked
   */
  public updateServicePrice(): void {
    this.serviceCostString = ServicePrice.servicePriceString(this.service.rate, this.service.rate_type, this.startDate, this.endDate);
  }

  ngOnInit(): void {
    // Get the service id from the url parameter and retrieve the service and service provider
    console.log('ServicerequestComponent ngOnInit called');
    this.route.params.subscribe(params => {
      console.log('servicerequestComponent in route.params.subscribe');
      console.log(params);
      console.log(params['id']);

      const serviceId = params['id'];

      this.api.getService(serviceId)
        .then(service => {
          console.log('ServicerequestComponent getService.then called');
          this.service = service;

          this.api.getUser(service.user_id)
            .then(user => {
              console.log('ServicerequestComponent getUser providing user then called');
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

      // Get the current user data
      this.api.getUser(this.loginService.userId)
        .then(user => {
          console.log('ServicerequestComponent getUser requestingUser then called');
          this.requestingUser = user;
          this.pets = this.requestingUser.pets;
        })
        .catch(error => {
          // TODO Handle error
          console.log('ServicerequestComponent getUser requestingUser catch called');
          console.error('Unable to get the requesting user');
          console.error(error);
        });
    });

  }


}
