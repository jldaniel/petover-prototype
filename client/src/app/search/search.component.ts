import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../api/api.service';
import {Service} from '../api/Service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  title = 'SEARCH PAGE:';
  addy = 'Somewhere over the rainbow';
  services: Service[];

  constructor(private api: ApiService) {
    console.log('SearchComponent.constructor called');
  }

  ngOnInit(): void {
    console.log('SearchComponent.ngOnInit called');
    /*
    Figure out how to pass address from onclick
    addy = ONCLICKVARIABLE;
     */
    this.api.getRadServices(this.addy).then(services => this.services = services);
    console.log('Retrieved services with addresses within 10 miles')
  }
}
