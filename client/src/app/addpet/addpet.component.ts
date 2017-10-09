import {Component} from '@angular/core';
import {ApiService} from '../api/api.service';
import {Router} from '@angular/router';
import {Pet} from '../api/Pet';
import {LoginService} from '../util/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent {
  public petName: string;
  public petAboutMe: string;
  public petAnimal: string;
  public newPetError = false;
  public base64Image = '';


  constructor(private router: Router, private api: ApiService, public loginService: LoginService) {
    console.log('AddpetComponent.constructor called');
  }

  public addPet(): void {
    console.log('AddpetComponent.addPet called');
    this.resetState();
    this.api.newPet(this.loginService.userId, this.petName, this.petAboutMe, this.petAnimal, this.base64Image)
      .then(response => {
        console.log('New pet created');
        console.log(response);
        this.router.navigate(['/pets']);
      }).catch(error => {
        console.error('Error creating new pet');
        console.error(error);
        this.newPetError = true;
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
    console.log('AddpetComponent.resetState called');
    this.newPetError = false;
  }

}
