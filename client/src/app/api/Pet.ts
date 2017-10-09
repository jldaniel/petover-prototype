import {Picture} from './Picture';

export class Pet {
  id: number;
  user_id: number;
  name: string;
  about_me: string;
  animal: string;
  img_url: string;
  created_at: string;
  updated_at: string;
  picture: Picture = null;

  profile_image_url: string;
}
