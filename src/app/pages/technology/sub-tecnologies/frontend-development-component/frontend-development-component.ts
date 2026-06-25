import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { StartBuildingComponent } from '../../../../Shared/components/start-building-component/start-building-component';

@Component({
  selector: 'app-frontend-development-component',
  imports: [NgOptimizedImage, StartBuildingComponent],
  templateUrl: './frontend-development-component.html',
  styleUrl: './frontend-development-component.css',
})
export class FrontendDevelopmentComponent {
  serviceOptions = [
    'Angular / React / Vue Development',
    'Full Stack Engineering',
    'UI/UX Implementation',
    'Performance Optimization',
    'Technical Consulting',
  ];
}
