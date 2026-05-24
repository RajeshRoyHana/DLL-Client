import { Component } from '@angular/core';
import { AboutHeroComponent } from "../about-hero-component/about-hero-component";
import { AboutContentComponent } from '../about-content-component/about-content-component';

@Component({
  selector: 'app-about-component',
  imports: [AboutHeroComponent,AboutContentComponent],
  templateUrl: './about-component.html',
 
})
export class AboutComponent {

}
