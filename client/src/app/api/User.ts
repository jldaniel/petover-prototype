import {Service} from './Service';
import {Pet} from './Pet';

export class User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  about_me: string;
  img_url: string;
  created_at: string;
  updated_at: string;
  pets: Pet[] = null;
  services: Service[] = null;

  getProfileImageUrl(): string {
    return '/assets' + this.img_url;
  }

}
