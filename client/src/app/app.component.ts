import { Component, OnInit  } from '@angular/core';
import { BetaloginService } from './betalogin/betalogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  betaLoggedIn = false;

  constructor(betaloginService: BetaloginService) {
    console.log('AppComponent.constructor called');
  }

  ngOnInit(): void {
    console.log('AppComponent.onInit called');

  }

}
