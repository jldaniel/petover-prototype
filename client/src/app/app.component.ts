import { Component, OnInit  } from '@angular/core';
import { ApiService } from './_services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PetOver';
  password = '';

  constructor(private apiService: ApiService) {
    console.log('AppComponent.constructor called');
  }

  login(): void {
    console.log('AppComponent.login called');

    this.apiService.splashLogin(this.password)
      .then(response => console.log('Login success!'))
      .catch(error => console.log('Login failure!'));

    console.log('AppComponent after splash login');
  }

  logout(): void {
    console.log('AppComponent.logout called');
  }

  ngOnInit(): void {
    console.log('AppComponent.onInit called');

  }

}
