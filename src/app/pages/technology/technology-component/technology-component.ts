import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartBuildingComponent } from '../../../Shared/components/start-building-component/start-building-component';

@Component({
  selector: 'app-technology-component',
  imports: [CommonModule, NgOptimizedImage, RouterModule, StartBuildingComponent],
  templateUrl: './technology-component.html',
  styleUrl: './technology-component.css',
})
export class TechnologyComponent {
  serviceOptions = [
    'Frontend Engineering',
    'Backend Architecture',
    'Cloud Infrastructure',
    'DevOps & CI/CD',
    'Database Management',
    'Security Engineering',
  ];
}
