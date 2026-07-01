import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-dotnet-component',
  imports: [NgOptimizedImage],
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
