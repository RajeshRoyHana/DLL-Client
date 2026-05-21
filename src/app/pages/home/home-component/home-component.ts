import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero-component/home-hero-component";
import { HomeIntroComponent } from '../home-intro-component/home-intro-component';
import { HomeCarouselComponent } from '../home-carousel-component/home-carousel-component';
import { HomeServiceComponent } from '../home-service-component/home-service-component';
import { HomeStrategyComponent } from '../home-strategy-component/home-strategy-component';
import { HomeOfficeLocationComponent } from '../home-office-location-component/home-office-location-component';
import { HomeProductsComponent } from '../home-products-component/home-products-component';
import { HomeAidrivenDevelopementComponent } from '../home-aidriven-developement-component/home-aidriven-developement-component';

@Component({
  selector: 'app-home-component',
  imports: [HomeHeroComponent,HomeIntroComponent, HomeCarouselComponent,HomeServiceComponent,HomeStrategyComponent,HomeOfficeLocationComponent,HomeProductsComponent,HomeAidrivenDevelopementComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
