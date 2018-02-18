import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';

import { APP_ROUTES_PROVIDER } from './app.routes';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './landing/staff/dashboard/dashboard.component';
import { DashboardService } from './DashboardService/dashboard.service';
import { NewProgramComponent } from './landing/staff/dashboard/new-program/new-program.component';
import { OldProgramComponent } from './landing/staff/dashboard/old-program/old-program.component';
import { CreateProgramComponent } from './landing/staff/dashboard/new-program/create-program/create-program.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    NewProgramComponent,
    OldProgramComponent,
    CreateProgramComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
