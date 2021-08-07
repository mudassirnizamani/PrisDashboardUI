import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin.component';

// PrimeNg Modules - Mudasir Ali
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, InputTextModule],
})
export class SigninModule {}
