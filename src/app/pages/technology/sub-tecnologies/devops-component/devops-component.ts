import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { StartBuildingComponent } from '../../../../Shared/components/start-building-component/start-building-component';

@Component({
  selector: 'app-devops-component',
  imports: [NgOptimizedImage, StartBuildingComponent],
  templateUrl: './devops-component.html',
  styleUrl: './devops-component.css',
})
export class DevopsComponent {
  serviceOptions = [
    'Cloud Native (AWS / GCP / Azure)',
    'On-Premise / Hybrid',
    'Legacy Migration',
    'Pipeline Automation',
    'Kubernetes Orchestration',
  ];
}
