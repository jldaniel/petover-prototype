import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from '../api/User';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];

  constructor(private api: ApiService) {
    console.log('HomeComponent.constructor called');

  }

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit called');
    // load local caretakers
    this.api.getUsers()
      .then(caretakers => this.users = caretakers);
    console.log('Retrieved caretakers');
    console.log(this.users);

  }
}
