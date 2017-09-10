import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router) {
    console.log('AboutComponent.constructor called');
  }
}
