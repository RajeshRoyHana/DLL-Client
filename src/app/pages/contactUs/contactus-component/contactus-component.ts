import { Component } from '@angular/core';
import { ContactUsContentComponent } from '../contact-us-content-component/contact-us-content-component';
import { ContactUsHeroComponent } from '../contact-us-hero-component/contact-us-hero-component';

@Component({
  selector: 'app-contactus-component',
  imports: [ContactUsContentComponent,ContactUsHeroComponent],
  templateUrl: './contactus-component.html',
})
export class ContactusComponent {

}
