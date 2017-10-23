import { ServiceRequest } from './ServiceRequest';
import { User } from './User';
import { Pet } from './Pet';
import { Service } from './Service';

export interface IStayover {
  service_request?: ServiceRequest;
  provider?: User;
  pet?: Pet;
  service?: Service;
}
