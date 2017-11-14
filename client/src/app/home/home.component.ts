import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from '../api/User';
import { LoginService } from '../util/login.service';
import {DefaultImage} from '../util/DefaultImage';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  defaultImage = new DefaultImage();

  constructor(private api: ApiService, public loginService: LoginService) {
    console.log('HomeComponent.constructor called');

  }

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit called');
    // load local caretakers
    this.api.getUsers()
      .then(users => this.users = this.getUsersWithServices(users));
    console.log('Retrieved caretakers');
    console.log(this.users);
  }

  /**
   * Get only those users that have services for display on the public home page
   *
   * @param {User[]} users The list of users returned from the server
   * @returns {Array} A list of users that have services
   */
  private getUsersWithServices(users: User[]) {
    console.log('HomeComponent.getUsersWithServices');
    const users_with_services = [];

    for (const user of users) {
      console.log(user);
      if (user.services.length > 0) {
        console.log('User with services found');
        users_with_services.push(user);
      }
    }

    return users_with_services;
  }
}
