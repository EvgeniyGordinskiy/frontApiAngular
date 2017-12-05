import { Component, OnInit } from '@angular/core';
import {Form} from "../../helpers/form/form";

import {LoginService} from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.styl']
})
export class LoginComponent implements OnInit {
  constructor(
      private loginService: LoginService,
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
    this.loginService.handler(this.model)
  }

  ngOnInit() {
  }

}
