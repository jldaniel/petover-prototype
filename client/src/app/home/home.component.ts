import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Caretaker } from '../api/caretaker';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  caretakers: Caretaker[];

  constructor(private api: ApiService) {
    console.log('HomeComponent.constructor called');

  }

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit called');
    // load local caretakers
    this.api.getCaretakers()
      .then(caretakers => this.caretakers = caretakers);
    console.log('Retrieved caretakers');
    console.log(this.caretakers);

  }
}
