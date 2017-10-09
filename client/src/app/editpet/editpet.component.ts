import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api/api.service';
import {LoginService} from '../util/login.service';
import {Pet} from '../api/Pet';

@Component({
  selector: 'app-root',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {

  public pet: Pet;
  public updatedName: string;
  public updatedAboutMe: string;
  public updatedAnimal: string;
  public petUpdateError = false;
  public base64Image = '';

  constructor
  (
    public loginService: LoginService,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  updatePet(): void {
    this.petUpdateError = false;
    this.api.updatePet
    (
      this.loginService.userId,
      this.pet.id,
      this.updatedName,
      this.updatedAboutMe,
      this.updatedAnimal,
      this.base64Image
    )
      .then(response => {
        console.log('UpdateService success');
        this.router.navigate(['/pets']);
      }).catch(error => {
      console.error('Error updating pet');
      console.error(error);
      this.petUpdateError = true;
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

      const petId = params['id'];
      this.api.getPet(this.loginService.userId, petId)
        .then(pet => {
          this.pet = pet;
          this.updatedName = pet.name;
          this.updatedAboutMe = pet.about_me;
          this.updatedAnimal = pet.animal;
        }).catch(error => {
        console.error('Error retrieving pet');
        console.error(error);
        // TODO Handle error case
      });
    });
  }

}
