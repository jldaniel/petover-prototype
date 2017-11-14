import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../api/User';
import {DefaultImage} from '../util/DefaultImage';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;
  defaultImage = new DefaultImage();

  constructor(private api: ApiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // Get the user id from the url parameter and retrieve the user
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);

      const userId = params['id'];

      this.api.getUser(userId)
        .then(user => this.user = user)
        .catch(error => {
          console.log('Error getting the user profile for user id: ' + userId);
          console.log(error);
          // TODO Handle this error and perform a redirect
        });
    });

  }

}
