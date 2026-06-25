import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartBuildingComponent } from '../../../../Shared/components/start-building-component/start-building-component';

@Component({
  selector: 'app-security-engineering-component',
  imports: [CommonModule, StartBuildingComponent],
  templateUrl: './security-engineering-component.html',
  styleUrl: './security-engineering-component.css',
})
export class SecurityEngineeringComponent {
  serviceOptions = [
    'Security Audit & Assessment',
    'Penetration Testing',
    'Zero Trust Architecture',
    'Compliance & Governance',
    'Incident Response Planning',
  ];
}
