import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoginService } from '../util/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../api/User';


@Component({
  selector: 'app-root',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  public user: User;
  public updatedFirstName: string;
  public updatedLastName: string;
  public updatedAboutMe: string;
  public profileUpdateError = false;

  constructor(public loginService: LoginService, private api: ApiService, private route: ActivatedRoute) {

  }

  updateProfile(): void {
    this.api.updateUser(this.user.id, this.updatedFirstName, this.updatedLastName, this.updatedAboutMe)
      .then(response => this.user = response) // redirect to the dashboard
      .catch(error => this.profileUpdateError = true);
  }


  ngOnInit(): void {
    this.api.getUser(this.loginService.userId)
      .then(user => {
        this.user = user;
        this.updatedFirstName = user.first_name;
        this.updatedLastName = user.last_name;
        this.updatedAboutMe = user.about_me;
      })
      .catch(error => {
        console.log('Error getting user profile');
        console.log(error);
        // TODO Handle this case, redirect to the home page maybe.
      });
  }
}
