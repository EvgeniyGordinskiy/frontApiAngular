import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//----- components ------
import { LoginComponent } from './pages/login/login.component';
import { ClientsComponent } from './pages/with_navigation/clients/clients.component';
import { WithNavigationComponent } from './pages/with_navigation/with-navigation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: WithNavigationComponent, children: [
  { path: 'clients', component: ClientsComponent },
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}