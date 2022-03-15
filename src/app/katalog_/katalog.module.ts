import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KatalogRoutingModule } from './katalog-routing.module';
import { OptKatalogNComponent } from './opt-katalog-n/opt-katalog-n.component';


@NgModule({
  declarations: [
    OptKatalogNComponent
  ],
  imports: [
    CommonModule,
    KatalogRoutingModule
  ]
})
export class KatalogModule { }
