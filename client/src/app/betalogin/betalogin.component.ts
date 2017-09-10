import { Component } from '@angular/core';
import { BetaloginService} from './betalogin.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './betalogin.component.html',
  styleUrls: ['./betalogin.component.css']
})
export class BetaloginComponent {
  password = '';
  loginError = false;

  constructor(
    private loginService: BetaloginService,
    private router: Router
  ) {
    console.log('BetaloginComponent.constructor called');
  }

  login(): void {
    console.log('BetaloginComponent.login called');
    this.loginError = false;
    this.loginService.login(this.password)
      .then(response => {
        console.log('Beta Login success');
        this.password = '';
        this.router.navigate(['/home']);
      }).catch(error => {
        console.log('Beta Login failure');
        this.password = '';
        this.loginError = true;
        // TODO display login error
    });
  }
}
