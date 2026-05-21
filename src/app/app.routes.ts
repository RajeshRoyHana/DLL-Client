import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-component/home-component';
import { CareerComponent } from './pages/career/career-component/career-component';
import { CareerDetailsComponent } from './pages/career/career-details-component/career-details-component';
import { AboutComponent } from './pages/about/about-component/about-component';
import { FaqComponent } from './pages/faq/faq-component/faq-component';
import { ContactusComponent } from './pages/contactUs/contactus-component/contactus-component';
import { ServicesComponent } from './pages/services/services-component/services-component';
import { DevelopmentComponent } from './pages/services/sub-services/development-component/development.component';
import { AiWebToolsComponent } from './pages/services/sub-services/ai-web-tools-component/ai-web-tools-component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'career', component: CareerComponent
    },
    {
        path: 'career-details', component: CareerDetailsComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'faq', component: FaqComponent
    },
    {
        path: 'services', component: ServicesComponent
    },
     {
        path: 'development', component: DevelopmentComponent
    },
    {
        path: 'ai-web', component: AiWebToolsComponent
    },
    {
        path: 'contact', component: ContactusComponent
    },
    {
        path: '**', component: HomeComponent
    }

];
