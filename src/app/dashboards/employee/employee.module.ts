import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

// CustomModules - Mudasir Ali
import { BlocksModule } from './blocks/blocks.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    BlocksModule,
    FeaturesModule,
    SharedModule,
  ],
})
export class EmployeeModule {}
