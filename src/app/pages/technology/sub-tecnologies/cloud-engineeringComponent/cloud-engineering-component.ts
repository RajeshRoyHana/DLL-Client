import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { StartBuildingComponent } from '../../../../Shared/components/start-building-component/start-building-component';

@Component({
  selector: 'app-cloud-engineering-details',
  imports: [NgOptimizedImage, StartBuildingComponent],
  templateUrl: './cloud-engineering-component.html',
  styleUrl: './cloud-engineering-component.css',
})
export class CloudEngineeringComponent {
  serviceOptions = [
    'Infrastructure Modernization',
    'Cloud Migration',
    'Kubernetes Orchestration',
    'Serverless Architecture',
    'Multi-Cloud Strategy',
    'FinOps & Cost Optimization',
  ];
}
