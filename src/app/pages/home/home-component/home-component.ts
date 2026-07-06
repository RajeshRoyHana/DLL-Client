import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero-component/home-hero-component";
import { HomeIntroComponent } from '../home-intro-component/home-intro-component';
import { HomeServiceComponent } from '../home-service-component/home-service-component';
import { HomeStrategyComponent } from '../home-strategy-component/home-strategy-component';
import { HomeProductsComponent } from '../home-products-component/home-products-component';
import { HomeAidrivenDevelopementComponent } from '../home-aidriven-developement-component/home-aidriven-developement-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [HomeHeroComponent,HomeIntroComponent,HomeServiceComponent,HomeStrategyComponent,HomeProductsComponent,HomeAidrivenDevelopementComponent, RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
