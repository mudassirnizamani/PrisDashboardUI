import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNgModules - Mudasir Ali
import {RippleModule} from 'primeng/ripple';

// Custom Modules - Mudasir Ali
import { BlocksModule } from './blocks/blocks.module';
import { SharedModule } from 'primeng/api';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';


const CustomModules = [
  BlocksModule,
  SharedModule,
  CoreModule,
  FeaturesModule
]

const PrimeNgModules = [
  RippleModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModules,
    PrimeNgModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
