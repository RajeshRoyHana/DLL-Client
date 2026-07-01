import { Component } from '@angular/core';
import { FaqHeroComponent } from '../faq-hero-component/faq-hero-component';
import { FaqContentComponent } from '../faq-content-component/faq-content-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq-component',
  imports: [FaqHeroComponent,FaqContentComponent,RouterLink],
  templateUrl: './faq-component.html'
 
})
export class FaqComponent {

}
