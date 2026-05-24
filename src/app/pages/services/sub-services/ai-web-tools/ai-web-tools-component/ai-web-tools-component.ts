import { Component } from '@angular/core';
import { AiwebtoolHeroComponent } from '../aiwebtool-hero-component/aiwebtool-hero-component';
import { AiwebtoolContentComponent } from '../aiwebtool-content-component/aiwebtool-content-component';

@Component({
  selector: 'app-ai-web-tools-component',
  imports: [AiwebtoolHeroComponent,AiwebtoolContentComponent],
  templateUrl: './ai-web-tools-component.html',
})
export class AiWebToolsComponent {

}
