

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api/api.service';
import {LoginService} from '../util/login.service';
import {Service} from '../api/Service';

@Component({
  selector: 'app-root',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {

  public service: Service;
  public updatedName: string;
  public updatedAbout: string;
  public updatedRate: number;
  public updatedRateType: string;
  public serviceUpdateError = false;

  constructor
  (
    public loginService: LoginService,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  updateService(): void {
    this.serviceUpdateError = false;
    this.api.updateService
    (
      this.loginService.userId,
      this.service.id,
      this.updatedName,
      this.updatedAbout,
      this.updatedRate,
      this.updatedRateType
    )
      .then(response => {
        console.log('UpdateService success');
        this.router.navigate(['/services']);
      }).catch(error => {
        console.error('Error updating service');
        console.error(error);
        this.serviceUpdateError = true;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);

      const serviceId = params['id'];
      this.api.getService(this.loginService.userId, serviceId)
        .then(service => {
          this.service = service;
          this.updatedName = service.name;
          this.updatedAbout = service.about;
          this.updatedRate = service.rate;
          this.updatedRateType = service.rate_type;
        }).catch(error => {
          console.error('Error retrieving service');
          console.error(error);
          // TODO Handle error case
      });
    });
  }

}
