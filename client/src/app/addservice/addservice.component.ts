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
  public serviceAddress: string;
  public serviceRate: number;
  public serviceRateType: string;
  public newServiceError = false;
  public base64Image = '';

  constructor(private router: Router, private api: ApiService, public loginService: LoginService) {

  }

  public addService(): void {
    console.log('AddserviceComponent.addService called');
    this.resetState();
    this.api.newService(this.loginService.userId, this.serviceName,
      this.serviceAbout, this.serviceAddress, this.serviceRate,
      this.serviceRateType, this.base64Image)
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


  private resetState(): void {
    console.log('AddserviceComponent.resetState called');
    this.newServiceError = false;
  }

}
