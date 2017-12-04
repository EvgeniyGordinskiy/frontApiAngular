import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

//----- helpers -----
import { Form } from './_helpers/form/form'
//----- services -----
import { AuthService } from './auth.service';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [
      AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
