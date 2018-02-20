import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../DashboardService/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  check1:boolean = true;
  check2:boolean = false;
  check3:boolean = false;

  constructor(private dashboard:DashboardService) { }

  shift(num:number) {
    if(num == 1) {
      this.check1 = true;
      this.check2 = false;
      this.check3 = false;
      this.dashboard.getPrograms();
    }
    if(num == 2) {
      this.check2 = true;
      this.check1 = false;
      this.check3 = false;
      this.dashboard.getApplications();
    }
    if(num == 3) {
      this.check3 = true;
      this.check2 = false;
      this.check1 = false;
    }


  }

  

  ngOnInit() {
  }

}
