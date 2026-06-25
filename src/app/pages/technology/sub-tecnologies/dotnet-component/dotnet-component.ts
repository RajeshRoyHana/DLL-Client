import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { StartBuildingComponent } from '../../../../Shared/components/start-building-component/start-building-component';

@Component({
  selector: 'app-dotnet-component',
  imports: [NgOptimizedImage, StartBuildingComponent],
  templateUrl: './dotnet-component.html',
  styleUrl: './dotnet-component.css',
})
export class DotnetComponent {
  serviceOptions = [
    '.NET Frontend Modernization',
    '.NET Backend API Development',
    'Blazor Development',
    'Migration from .NET Framework',
    'Microservices Architecture',
  ];
}
