import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  addy = '1324 67th Street, Berkeley, CA';
  services: Service[];

  constructor(private api: ApiService, private route: ActivatedRoute) {
    console.log('SearchComponent.constructor called');
  }

  ngOnInit(): void {
    console.log('SearchComponent.ngOnInit called');
    // Get the form submission data
    this.route.params.subscribe(params => {
      console.log('GOT THE ADDRESS: ' + params['address']);
      this.addy = params['address'];

      this.api.getRadServices(this.addy).then(services => this.services = services);
      console.log('Retrieved services with addresses within 10 miles');
    });


  }
}
