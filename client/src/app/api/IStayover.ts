import { ServiceRequest } from './ServiceRequest';
import { User } from './User';
import { Pet } from './Pet';
import { Service } from './Service';

export interface IStayover {
  serviceRequest?: ServiceRequest;
  serviceProvider?: User;
  pet?: Pet;
  service?: Service;
}
