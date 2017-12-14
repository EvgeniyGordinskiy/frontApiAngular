import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


//----- services -----
  //--- login ---
import { LoginService } from './services/login/login.service';

  //--- clients ---
import {
    GetAllClientsService,
    CurrentClientService
} from './services/clients/index'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { AppDeclarations } from './declarations';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    AppDeclarations,
    ClientDetailComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    LoginService,
    GetAllClientsService,
    CurrentClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
