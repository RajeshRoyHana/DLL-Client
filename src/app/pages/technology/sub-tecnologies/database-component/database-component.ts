import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { StartBuildingComponent } from '../../../../Shared/components/start-building-component/start-building-component';

@Component({
  selector: 'app-database-component',
  imports: [NgOptimizedImage, StartBuildingComponent],
  templateUrl: './database-component.html',
  styleUrl: './database-component.css',
})
export class DatabaseComponent {
  serviceOptions = [
    'MSSQL Performance Tuning',
    'High Availability Setup',
    'Data Migration / Cloud Pivot',
    'Managed DBA Services',
  ];
}
