import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


import {Form} from "../../helpers/form/form";


import { Service } from "../service";
import { environment } from '../../../environments/environment';
import { handleError } from '../../helpers/handleError/handleError';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService implements Service {

  private httpOptions = environment.HTTP_OPTIONS;

  private authUrl =  environment.AUTH_URL;

  constructor(
      private http: HttpClient,
      public router: Router
  ) { }

  success (data) {
    this.router.navigate(['/clients']);
    console.log(data, ' success')
  }

  fail (error) {
    handleError(error);
    console.log(error, ' error')
  }

  /** Login user */
  handler (user : Form): Promise<any> {
    return this.http.post(this.authUrl, user.get(), this.httpOptions)
      .toPromise()
      .then(data =>  this.success(Promise.resolve(data)))
      .catch(err => this.fail(err))
  }

}
