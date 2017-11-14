import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../api/User';
import { ServiceRequest, RequestState } from '../api/ServiceRequest';
import { Service } from '../api/Service';
import { Pet } from '../api/Pet';
import {DefaultImage} from '../util/DefaultImage';


@Component({
  selector: 'app-root',
  templateUrl: './servicereview.component.html',
  styleUrls: ['servicereview.component.css']
})
export class ServicereviewComponent implements OnInit {
  public serviceRequest: ServiceRequest = new ServiceRequest();
  public user: User = new User();
  public pet: Pet = new Pet();
  public service: Service = new Service();
  public defaultImage = new DefaultImage();

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {

  }

  /**
   * Called when the service provider accepts the service request
   */
  acceptRequest(): void {
    console.log('Accepting Service Request');
    this.api.updateServiceRequest(this.serviceRequest.id, RequestState.ACCEPTED)
      .then(serviceRequest => {
        // Redirect to the dashboard
        this.router.navigate(['/dashboard']);
    }).catch(error => {
      console.error('There was an error accepting the service request');
      console.error(error);
    });
  }

  /**
   * Called when the service provider denies the service request
   */
  denyRequest(): void {
    console.log('Denying Service Request');
    this.api.updateServiceRequest(this.serviceRequest.id, RequestState.DENIED)
      .then(serviceRequest => {
        // Redirect to the dashboard
        this.router.navigate(['/dashboard']);
      }).catch(error => {
        console.error('There was an error denying the service request');
        console.error(error);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);

      const serviceRequestId = params['id'];

      this.api.getServiceRequest(serviceRequestId)
        .then(serviceRequest => {
          this.serviceRequest = serviceRequest;

          // get the requesting user
          const userId = serviceRequest.requester_id;
          this.api.getUser(userId)
            .then(user => {
              this.user = user;
            }).catch(error => {
              console.error('Error retrieving user: ' + userId);
              console.error(error);
          });

          // get the associated pet
          const petId = serviceRequest.pet_id;
          this.api.showPet(petId)
            .then(pet => {
              this.pet = pet;
            }).catch(error => {
              console.error('Error retrieving pet: ' + petId);
              console.error(error);
          });

          // get the service that was requested
          const serviceId = serviceRequest.service_id;
          this.api.getService(serviceId)
            .then(service => {
              this.service = service;
            }).catch(error => {
              console.error('Error retrieving service: ' + serviceId);
              console.error(error);
          });

        }).catch(error => {
          // TODO Handle error
          console.error('Error getting service request for id: ' + serviceRequestId);
          console.error(error);
      });
    });
  }


}
