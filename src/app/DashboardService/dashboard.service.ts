import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class DashboardService {

  constructor( private http: Http, private router: Router) { }

  // Base URL for Petfinder API
  private petsUrl = 'http://localhost:3000/dashboard';

  // Get a list if pets based on animal
  findPets() {

    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/dashboard',  {
      headers: headers
    })
      .subscribe(
        (res) => {
          console.log(res);
            this.router.navigate(['/dashboard'])

       
     }
   );
  }

  

}
