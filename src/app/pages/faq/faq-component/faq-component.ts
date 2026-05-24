import { Component } from '@angular/core';
import { FaqHeroComponent } from '../faq-hero-component/faq-hero-component';
import { FaqContentComponent } from '../faq-content-component/faq-content-component';

@Component({
  selector: 'app-faq-component',
  imports: [FaqHeroComponent,FaqContentComponent],
  templateUrl: './faq-component.html'
 
})
export class FaqComponent {

}
