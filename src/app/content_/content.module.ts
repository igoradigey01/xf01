import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { KatalogNComponent } from './katalog_/katalog-n/katalog-n.component';
import {OptKatalogNComponent} from './katalog_/opt-katalog-n/opt-katalog-n.component'
import { OptCategoriaNComponent } from './opt-categoria-n/opt-categoria-n.component';


@NgModule({
  declarations: [
    KatalogNComponent,
    OptCategoriaNComponent,
    OptKatalogNComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports:[
    KatalogNComponent,
    OptCategoriaNComponent,
    OptKatalogNComponent
  ]
})
export class ContentModule { }
