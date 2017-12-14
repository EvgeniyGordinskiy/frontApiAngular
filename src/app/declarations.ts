//----- pages -----
import {
  LoginComponent,
  WithNavigationComponent,
  ClientsComponent,
  } from './pages/index';



//----- layouts -----
import {
  UserLayoutComponent
  } from './layouts/index';



//----- components -----
import {
  HeaderComponent,
  SidebarComponent,
  ListComponent
  } from './components/index';





export const AppDeclarations = [
//--- components ---
  HeaderComponent,
  SidebarComponent,
  ListComponent,

//--- pages ---
  LoginComponent,
  WithNavigationComponent,
  ClientsComponent,

//--- layouts ---
  UserLayoutComponent,
  ]