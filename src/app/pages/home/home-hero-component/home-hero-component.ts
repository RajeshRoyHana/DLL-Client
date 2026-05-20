import { AfterViewInit, Component, OnDestroy } from '@angular/core';


import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min'


@Component({
  selector: 'app-home-hero-component',
  imports: [],
  templateUrl: './home-hero-component.html',
  styleUrl: './home-hero-component.css',
})
export class HomeHeroComponent  

  implements AfterViewInit, OnDestroy {

  vantaEffect: any;

  ngAfterViewInit(): void {

 
this.vantaEffect = NET({
  el: '#hero-bg',

  THREE,

  mouseControls: true,
  touchControls: true,
  gyroControls: false,

  minHeight: 200,
  minWidth: 200,

  scale: 1,
  scaleMobile: 1,

  color: 0xffffff,
  backgroundColor: 0x202020,

  points: 10,
  maxDistance: 22,
  spacing: 30,

  showDots: true
});


  }

  ngOnDestroy(): void {

    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }

  }

}

