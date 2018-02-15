//Modules loading
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { DashboardComponent } from "./landing/staff/dashboard/dashboard.component";

const APP_ROUTES:Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);