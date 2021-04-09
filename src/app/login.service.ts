import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // constructor(private http: HttpClient, private router: Router) { }
  constructor(){}

  
  // login(name: any, username: any, password: any) {
  //   return this.http.post<User>(`${environment.firebaseConfig.databaseURL}`, { name, username, password })
  //     .pipe(map(user => {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes  
  //       localStorage.setItem('user', JSON.stringify(user));
  //       console.log("inisde usersubjec====>", user);
  //       return user;
  //     }));
  // }
}
