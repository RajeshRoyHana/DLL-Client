import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero-component/home-hero-component";

@Component({
  selector: 'app-home-component',
  imports: [HomeHeroComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
