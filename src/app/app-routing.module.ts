import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//----- components ------
import { LoginComponent } from './pages/login/login.component';
import { ClientsComponent } from './pages/with_navigation/clients/clients.component';
import { WithNavigationComponent } from './pages/with_navigation/with-navigation.component';

const routes: Routes = [
  { path: 'login',
    component: LoginComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '',
    component: WithNavigationComponent,
    children: [
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'dashboard',
        component: ClientsComponent
      },
      {
        path: 'posts',
        component: ClientsComponent
      },
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}