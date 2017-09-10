import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log('HomeComponent.constructor called');
  }

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit called');
    // load local caretakers

  }
}
