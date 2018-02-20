import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../DashboardService/dashboard.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private dashboard:DashboardService) { }

  ngOnInit() {
  }

  callMe() {
    //this.dashboard.findPets();
  }

}
