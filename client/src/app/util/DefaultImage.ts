import {Directive, Input } from '@angular/core';

export class DefaultImage {
  public userImage = './assets/default_images/default_user.png';
  public petImage = './assets/default_images/default_pet.png';
  public serviceImage = './assets/default_images/default_service.png';

  userImageError(): string {
    return this.userImage;
  }
}

