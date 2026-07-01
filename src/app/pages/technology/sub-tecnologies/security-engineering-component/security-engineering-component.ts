import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-security-engineering-component',
  imports: [CommonModule],
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
