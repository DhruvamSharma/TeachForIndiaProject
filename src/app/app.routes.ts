//Modules loading

import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { DashboardComponent } from "./landing/staff/dashboard/dashboard.component";
import { CreateProgramComponent } from "./landing/staff/dashboard/new-program/create-program/create-program.component";
import { ApplicationsComponent } from "./landing/staff/dashboard/manage-application/applications/applications.component";
import { HandleFeedbackComponent } from "./landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component";

const APP_ROUTES:Routes = [
    
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'create-program',
        component: CreateProgramComponent
    },
    {
        path: 'manage-applications',
        component: ApplicationsComponent
    },
    {
        path: 'handle-feedback',
        component: HandleFeedbackComponent
    }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);