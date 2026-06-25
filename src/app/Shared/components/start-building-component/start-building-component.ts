import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-start-building',
  imports: [],
  templateUrl: './start-building-component.html',
  styleUrl: './start-building-component.css',
})
export class StartBuildingComponent {
  @Input() serviceOptions: string[] = [];
  @Input() subtitle: string =
    'Initiate the consultation sequence for your end-to-end engagement. Our architects will review your requirements and respond within 24 hours.';
}
