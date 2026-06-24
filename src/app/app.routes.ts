import { Routes } from '@angular/router';


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
    path: 'technology',
    loadComponent: () =>
      import('./pages/technology/technology-component/technology-component')
        .then(m => m.TechnologyComponent),
  },
  {
    path: 'technology/dotnet',
    loadComponent: () =>
      import('./pages/technology/sub-tecnologies/dotnet-component/dotnet-component')
        .then(m => m.DotnetComponent)
  },
  {
    path: 'technology/cloud-engineering',
    loadComponent: () =>
      import('./pages/technology/sub-tecnologies/cloud-engineeringComponent/cloud-engineering-component')
        .then(m => m.CloudEngineeringComponent)
  },
  {
    path: 'technology/security-engineering',
    loadComponent: () =>
      import('./pages/technology/sub-tecnologies/security-engineering-component/security-engineering-component')
        .then(m => m.SecurityEngineeringComponent)
  },
  {
    path: 'technology/database-engineering',
    loadComponent: () =>
      import('./pages/technology/sub-tecnologies/database-component/database-component')
        .then(m => m.DatabaseComponent)
  },
  {
    path: 'technology/devops-engineering',
    loadComponent: () =>
      import('./pages/technology/sub-tecnologies/devops-component/devops-component')
        .then(m => m.DevopsComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
