import {Component, NgZone, OnInit, Inject, Input} from '@angular/core';
import { BetaloginService } from './betalogin/betalogin.service';
import { LoginService } from './util/login.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Used to control displaying the nav bar
   * @type {boolean}
   */
  public displayNav = false;

  /**
   * Used to control displaying the dashboard
   *
   * @type {boolean}
   */
  public displayDashboard = false;

  /**
   * Search bar form
   */

  searchForm: FormGroup;

  public defaultUserImage = './assets/default_images/default_user.png';

  constructor(private router: Router, betaloginService: BetaloginService,
              public loginService: LoginService,
              private zone: NgZone,
              @Inject(FormBuilder) fb: FormBuilder) {
    console.log('AppComponent.constructor called');
    const _that = this;

    this.router.events.subscribe( event => {
      if (event instanceof NavigationStart ) {
        console.log('AppState caught event NavigationStart');
        console.log(event);

        switch (event.url) {
          case '/home':
            console.log('Home navigated to');
            _that.displayNav = true;
            if (loginService.loggedIn) {
              _that.displayDashboard = true;
            } else {
              _that.displayDashboard = false;
            }
            break;

          case '/login':
            console.log('Login navigated to');
            _that.displayNav = true;
            _that.displayDashboard = false;
            break;
        }
      } else if (event instanceof NavigationEnd) {
          _that.zone.run(() => {
            console.log('Zone run called');
          });
      }

    });
  this.searchForm = fb.group({
    address:''
  });

  }
  searchRoute(): void {
    console.log('AppComponent.searchRoute called');
    console.log(this.searchForm.value);
    var filter = this.searchForm.value;
    this.router.navigate(['/search', filter]);
  };

  ngOnInit(): void {
    console.log('AppComponent.onInit called');

  }

}
