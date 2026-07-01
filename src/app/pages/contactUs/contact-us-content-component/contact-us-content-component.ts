import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us-content-component',
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  templateUrl: './contact-us-content-component.html',
})
export class ContactUsContentComponent {

  mapLoaded = false;
  mapUrl: SafeResourceUrl | null = null;

  selectedService = '';
  selectedTimeline = '';

  readonly services = [
    'Consulting & Digital Transformation',
    'Web Development',
    'Web Platform Modernization',
    'Cybersecurity',
    'AI Product Consulting',
    'AI-Driven Development Tools',
    'Cloud Engineering',
    'ERP Solution',
    'Other',
  ];

  readonly timelines = [
    'As soon as possible',
    'Within 1 month',
    '1 – 3 months',
    '3 – 6 months',
    '6 months+',
    'Not sure yet',
  ];

  readonly budgetLabels = [
    'Under 5,000',
    '5,000 – 15,000',
    '15,000 – 25,000',
    '25,000 – 50,000',
    '50,000+',
  ];

  budgetIndex = 2;

  get budgetLabel(): string {
    return this.budgetLabels[this.budgetIndex];
  }

  constructor(private sanitizer: DomSanitizer) {}

  loadMap() {
    if (this.mapLoaded) return;

    const rawUrl = 'https://www.google.com/maps?q=23.7701868,90.4069737&z=17&t=m&output=embed';

    // ✅ sanitize FIRST, then assign
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);

    this.mapLoaded = true;
  }


}
