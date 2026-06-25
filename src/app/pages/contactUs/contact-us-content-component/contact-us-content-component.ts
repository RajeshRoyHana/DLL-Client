import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us-content-component',
  imports: [CommonModule],
  templateUrl: './contact-us-content-component.html',
})
export class ContactUsContentComponent {

  mapLoaded = false;
  mapUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  loadMap() {
    if (this.mapLoaded) return;

    const rawUrl = 'https://www.google.com/maps?q=23.7701868,90.4069737&z=17&t=m&output=embed';

    // ✅ sanitize FIRST, then assign
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);

    this.mapLoaded = true;
  }


}
