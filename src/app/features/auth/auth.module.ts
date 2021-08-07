import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

// Auth Modules - Mudasir Alu
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ClientModule,
    EmployeeModule,
    SigninModule,
    SignupModule,
  ],
})
export class AuthModule {}
