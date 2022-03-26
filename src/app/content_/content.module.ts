import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { KatalogNComponent } from './katalog_/katalog-n/katalog-n.component';
import {OptKatalogNComponent} from './katalog_/opt-katalog-n/opt-katalog-n.component'
import { OptCategoriaNComponent } from './categoria_/opt-categoria-n/opt-categoria-n.component';
import {ManagerServiceModule} from './shared/services/maneger-service.module'


@NgModule({
  declarations: [
    KatalogNComponent,
    OptCategoriaNComponent,
    OptKatalogNComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ManagerServiceModule
  ],
  exports:[
    KatalogNComponent,
    OptCategoriaNComponent,
    OptKatalogNComponent
  ]
})
export class ContentModule { }
