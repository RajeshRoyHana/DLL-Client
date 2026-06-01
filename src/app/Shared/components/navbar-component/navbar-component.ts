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

  onNavClick(event: Event) {
    if (window.innerWidth > 991.98) return; // only auto-close on mobile

    const target = event.target as HTMLElement | null;
    if (!target) return;

    const clicked = target.closest('a, button') as HTMLElement | null;
    if (!clicked) return;

    // don't auto-close when clicking dropdown toggles (they control submenu)
    if (clicked.classList.contains('dropdown-toggle')) return;

    this.collapseNavbar();
  }

  collapseNavbar() {
    const collapseEl = document.getElementById('navbarSupportedContent');
    if (!collapseEl) return;

    if (collapseEl.classList.contains('show')) {
      collapseEl.classList.remove('show');
      // ensure collapsed state
      collapseEl.classList.add('collapse');
      collapseEl.setAttribute('aria-expanded', 'false');
      // remove inline styles applied by Bootstrap JS
      (collapseEl as HTMLElement).style.display = '';

      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) toggler.setAttribute('aria-expanded', 'false');
    }
  }
}
