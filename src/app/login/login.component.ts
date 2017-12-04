import { Component, OnInit } from '@angular/core';
import {Form} from "../_helpers/form/form";

import {AuthService} from './../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(
      private authService: AuthService,
  ) { }
  model = new Form({
    name: {
      name: 'name',
      type: 'text',
      value: ''
    },
    email:{
      name: 'email',
      type: 'email',
      value: ''
    }
  });

  onSubmit() {
    this.authService.login(this.model)
        .subscribe(token => console.log(token));
  }

  ngOnInit() {
  }

}
