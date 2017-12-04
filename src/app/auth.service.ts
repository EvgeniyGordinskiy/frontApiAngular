import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Form} from "./_helpers/form/form";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class AuthService {

  private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private authUrl = 'http://rest/auth/login';  // URL to web api

  constructor(
      private http: HttpClient,
  ) { }

  /** Login user */
  login (user : Form): Observable<any[]> {
    console.log(user.get());
    return this.http.post<any[]>(this.authUrl, user.get(), this.httpOptions)
        .pipe(
            tap(user => {console.log(user)}),
            catchError(this.handleError('error', []))
        );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(error);
      return of(result as T);
    };
  }
}
