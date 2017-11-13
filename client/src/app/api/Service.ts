import {Picture} from './Picture';

export class Service {
  id: number;
  user_id: number;
  name: string;
  about: string;
  rate: number;
  rate_type: string;
  img_url: string;
  rating: number;
  create_at: string;
  updated_at: string;
  picture: Picture = null;
  lat: number;
  lng: number;

  profile_image_url: string;
}

