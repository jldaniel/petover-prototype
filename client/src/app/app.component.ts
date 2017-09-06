import { Component, OnInit  } from '@angular/core';
import { ApiService } from './_services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PetOver';
  model: any = {};

  constructor(private apiService: ApiService) {}

  login(): void {
    console.log('AppComponent.login called');
    this.apiService.splashLogin(this.model.password)
      .then(response => console.log('Login success!'))
      .catch(error => console.log('Login failure!'));
  }

  logout(): void {
    console.log('AppComponent.logout called');
  }

  ngOnInit(): void {
    console.log('AppComponent.onInit called');

  }

}
