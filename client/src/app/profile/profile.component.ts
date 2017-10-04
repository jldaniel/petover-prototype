import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoginService } from '../util/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../api/User';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;

  constructor(public loginService: LoginService, private api: ApiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.api.getUser(this.loginService.userId)
      .then(user => this.user = user)
      .catch(error => {
        console.log('Error getting user profile');
        console.log(error);
        // TODO Handle this case, redirect to the home page maybe.
      });
  }

}
