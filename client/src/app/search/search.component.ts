import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import {Service} from '../api/Service';

import 'rxjs/add/operator/toPromise';
import {DefaultImage} from '../util/DefaultImage';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'SEARCH PAGE:';
  public searchAddress = '';
  services: Service[];
  defaultImage = new DefaultImage();

  constructor(private api: ApiService, private route: ActivatedRoute) {
    console.log('SearchComponent.constructor called');
  }

  ngOnInit(): void {
    console.log('SearchComponent.ngOnInit called');
    // Get the form submission data
    this.route.params.subscribe(params => {
      console.log('GOT THE ADDRESS: ' + params['address']);
      this.searchAddress = params['address'];

      this.api.getRadServices(this.searchAddress).then(services => this.services = services);
      console.log('Retrieved services with addresses within 10 miles');
    });
  }
}
