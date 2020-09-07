import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: Array<any>, ...args: unknown[]): string {
    if (!images || images.length === 0) {
      return 'assets/img/noimage.png';
    } else if (images.length > 0) {
      return images[0].url;
    }
  }

}
