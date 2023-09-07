import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/signin/login.component';
import { AuthenticationComponent } from './modules/login/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'login', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
