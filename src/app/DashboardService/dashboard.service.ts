import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class DashboardService {

  constructor( private http: Http, private router: Router) { }

  // Base URL for Petfinder API
  private dashboard_url = 'http://localhost:3000/dashboard';
  private manage_applications_url = 'http://localhost:3000/manage-applications/'

  
  /*  -----------  Create Program API   ---------------- */
  
  getPrograms() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(this.dashboard_url,  {
    headers: headers
    })
      .subscribe(
        (res) => {
           console.log('success');
             this.router.navigate(['/dashboard']);

        
      }
    );
  }



  /*  -----------  Manage Application API   ---------------- */

  getApplications() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(this.manage_applications_url,  {
    headers: headers
    })
      .subscribe(
        (res) => {
           console.log('success');
             this.router.navigate(['/manage-applications']);

        
      }
    );
  }

  

}
