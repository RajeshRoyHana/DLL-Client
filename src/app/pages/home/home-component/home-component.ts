import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero-component/home-hero-component";
import { HomeIntroComponent } from '../home-intro-component/home-intro-component';
import { HomeCarouselComponent } from '../home-carousel-component/home-carousel-component';

@Component({
  selector: 'app-home-component',
  imports: [HomeHeroComponent,HomeIntroComponent, HomeCarouselComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
