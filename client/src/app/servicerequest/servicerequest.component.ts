import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../util/login.service';
import { ApiService } from '../api/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './servicerequest.component.html',
  styleUrls: ['./servicerequest.component.css']
})
export class ServicerequestComponent implements OnInit {
  public requestingUser = null;
  public providingUser = null;
  public service = null;

  constructor(private loginService: LoginService, private api: ApiService, private route: ActivatedRoute) {

  }

  public requestService(): void {

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
