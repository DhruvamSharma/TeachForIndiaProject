//Modules loading
import { Routes, RouterModule } from "@angular/router";
import { Component } from "@angular/core/src/metadata/directives";
import { LandingComponent } from "./landing/landing.component";

const APP_ROUTES:Routes = [
    {
        path: '',
        component: LandingComponent
    }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);