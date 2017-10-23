import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoginService } from '../util/login.service';
import { IStayover } from '../api/IStayover';

@Component({
  templateUrl: './stayovers.component.html',
  styleUrls: ['./stayovers.component.css']
})
export class StayoversComponent implements OnInit {
  public stayovers: IStayover[] = []

  constructor(private api: ApiService, private loginService: LoginService) {

  }


  // TODO Also retrieve the service provider and pet info for the service requests
  ngOnInit(): void {
    // Retrieve the users stay overs for display
    this.api.getStayovers(this.loginService.userId)
      .then(stayovers => {
        this.stayovers = stayovers;

        console.log('Retrieved Stayovers');
        console.log(stayovers[0].service_request);


      }).catch(error => {
        // TODO Handle error
        console.error('There was an error retrieving the users stayovers');
        console.error(error);
    });
  }



}
