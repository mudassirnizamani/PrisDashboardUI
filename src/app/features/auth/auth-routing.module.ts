import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from 'src/app/blocks/layouts/auth-layout/auth-layout.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
      },
      {
        path: 'auth',
        component: SigninComponent,
      },
      {
        path: 'auth/signup',
        loadChildren: () =>
          import('./signup/signup.module').then(
            (module) => module.SignupModule
          ),
      },
      {
        path: 'auth/client',
        loadChildren: () =>
          import('./client/client.module').then(
            (moduel) => moduel.ClientModule
          ),
      },
      {
        path: 'auth/employee',
        loadChildren: () =>
          import('./employee/employee.module').then(
            (module) => module.EmployeeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
