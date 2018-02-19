import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';

import { APP_ROUTES_PROVIDER } from './app.routes';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './landing/staff/dashboard/dashboard.component';
import { DashboardService } from './DashboardService/dashboard.service';
import { NewProgramComponent } from './landing/staff/dashboard/new-program/new-program.component';
import { OldProgramComponent } from './landing/staff/dashboard/new-program/create-program/old-program/old-program.component';
import { CreateProgramComponent } from './landing/staff/dashboard/new-program/create-program/create-program.component';
import { ManageApplicationComponent } from './landing/staff/dashboard/manage-application/manage-application.component';
import { ApplicationsComponent } from './landing/staff/dashboard/manage-application/applications/applications.component';
import { FeedbackComponent } from './landing/staff/dashboard/feedback/feedback.component';
import { HandleFeedbackComponent } from './landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    NewProgramComponent,
    OldProgramComponent,
    CreateProgramComponent,
    ManageApplicationComponent,
    ApplicationsComponent,
    FeedbackComponent,
    HandleFeedbackComponent
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
