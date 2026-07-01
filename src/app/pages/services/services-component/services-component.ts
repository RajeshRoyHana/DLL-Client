import { Component } from '@angular/core';
import { ServiceHeroComponent } from '../service-hero-component/service-hero-component';
import { ServiceContentComponent } from '../service-content-component/service-content-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-component',
  imports: [ServiceHeroComponent,ServiceContentComponent, RouterLink],
  templateUrl: './services-component.html',
})
export class ServicesComponent {

}
