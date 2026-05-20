import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-component/home-component';
import { CareerComponent } from './pages/career/career-component/career-component';
import { CareerDetailsComponent } from './pages/career/career-details-component/career-details-component';

export const routes: Routes = [
    {
        path: '',component: HomeComponent
    },
    {
        path:'career',component:CareerComponent
    },
     {
        path:'career-details',component:CareerDetailsComponent
    },
    {
        path:'**',component:HomeComponent
    }
    
];
