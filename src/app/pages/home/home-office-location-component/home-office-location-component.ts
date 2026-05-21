import { Component } from '@angular/core';

@Component({
  selector: 'app-home-office-location-component',
  imports: [],
  templateUrl: './home-office-location-component.html',
  styleUrl: './home-office-location-component.css',
})
export class HomeOfficeLocationComponent {
  
offices = [
    {
      country: 'Bangladesh',
      address: 'Level 8, Dhanmondi, Dhaka 1209, Bangladesh',
      email: 'contact@dllsoft.com',
      phone: '+880 1700-000000'
    },
    {
      country: 'USA',
      address: '7426 Business Ave, New York, NY 10001',
      email: 'usa@dllsoft.com',
      phone: '+1 212-555-7890'
    },
    {
      country: 'Germany',
      address: 'Berlin Tech Park, Berlin, Germany',
      email: 'eu@dllsoft.com',
      phone: '+49 30 123456'
    },
    {
      country: 'UAE',
      address: 'Dubai Internet City, Dubai, UAE',
      email: 'uae@dllsoft.com',
      phone: '+971 50 1234567'
    },
    {
      country: 'Malaysia',
      address: 'Kuala Lumpur Tech Hub, Malaysia',
      email: 'asia@dllsoft.com',
      phone: '+60 111 234567'
    },
    {
      country: 'Japan',
      address: 'Shibuya Tech Center, Tokyo, Japan',
      email: 'jp@dllsoft.com',
      phone: '+81 90 1234 5678'
    }
  ];


}
