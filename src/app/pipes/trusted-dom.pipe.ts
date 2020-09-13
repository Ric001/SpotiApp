import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'trustedDom'
})
export class TrustedDomPipe implements PipeTransform {
  constructor(private sanitazer: DomSanitizer) {}
  transform(value: string): SafeResourceUrl {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.sanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
