import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-component/home-component';
import { AboutComponent } from './pages/about/about-component/about-component';
import { FaqComponent } from './pages/faq/faq-component/faq-component';
import { ContactusComponent } from './pages/contactUs/contactus-component/contactus-component';
import { ServicesComponent } from './pages/services/services-component/services-component';
import { DevelopmentComponent } from './pages/services/sub-services/development-component/development.component';
import { AiWebToolsComponent } from './pages/services/sub-services/ai-web-tools/ai-web-tools-component/ai-web-tools-component';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home-component/home-component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about-component/about-component').then(m => m.AboutComponent)
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq-component/faq-component').then(m => m.FaqComponent)
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services-component/services-component').then(m => m.ServicesComponent)
  },
  {
    path: 'development',
    loadComponent: () =>
      import('./pages/services/sub-services/development-component/development.component').then(m => m.DevelopmentComponent)
  },
  {
    path: 'ai-web',
    loadComponent: () =>
      import('./pages/services/sub-services/ai-web-tools/ai-web-tools-component/ai-web-tools-component').then(m => m.AiWebToolsComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contactUs/contactus-component/contactus-component').then(m => m.ContactusComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
