import { Component } from '@angular/core';
import { AboutHeroComponent } from "../about-hero-component/about-hero-component";

@Component({
  selector: 'app-about-component',
  imports: [AboutHeroComponent],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {

}
