import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';

// CustomModules - Mudasir Ali
import { BlocksModule } from './blocks/blocks.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    BlocksModule,
    FeaturesModule,
    SharedModule,
  ],
})
export class ClientModule {}
