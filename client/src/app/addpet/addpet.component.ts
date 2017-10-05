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


  constructor(private router: Router, private api: ApiService, public loginService: LoginService) {
    console.log('AddpetComponent.constructor called');
  }

  public addPet(): void {
    console.log('AddpetComponent.addPet called');
    this.resetState();
    this.api.newPet(this.loginService.userId, this.petName, this.petAboutMe, this.petAnimal)
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

  private resetState(): void {
    console.log('AddpetComponent.resetState called');
    this.newPetError = false;
  }

}
