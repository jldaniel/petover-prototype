

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
  public updatedAddress: string;
  public updatedRate: number;
  public updatedRateType: string;
  public serviceUpdateError = false;
  public base64Image = '';

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
      this.updatedAddress,
      this.updatedRate,
      this.updatedRateType,
      this.base64Image
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

  attachImage(fileInput: any) {
    const fileList: FileList = fileInput.target.files;
    console.log('File name = ' + fileList[0].name);
    console.log('File size = ' + fileList[0].size);
    console.log('File = ' + fileList[0]);

    this.convertFileToBase64AndSet(fileList);

  }

  convertFileToBase64AndSet(fileList: FileList) {
    if (fileList.length > 0) {
      const reader = new FileReader();

      reader.onloadend = (e: Event) => {

        console.log(reader.result);
        this.base64Image = reader.result;
      };

      reader.readAsDataURL(fileList[0]);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);

      const serviceId = params['id'];
      this.api.getUserService(this.loginService.userId, serviceId)
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
