import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  isContactPage = false;

  constructor(private router: Router) {
    this.isContactPage = this.router.url === '/contact';
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.isContactPage = event.urlAfterRedirects === '/contact';
      });
  }

  handleServicesClick(event: MouseEvent) {
    if (window.innerWidth <= 991.98) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const toggleButton = document.getElementById('servicesDropdownToggle');
      toggleButton?.click();
    }
  }
}
