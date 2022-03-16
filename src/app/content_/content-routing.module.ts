import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KatalogNComponent } from './katalog_/katalog-n/katalog-n.component';
import {OptKatalogNComponent} from './katalog_/opt-katalog-n/opt-katalog-n.component'
import { OptCategoriaNComponent } from './opt-categoria-n/opt-categoria-n.component';


const routes: Routes = [
  {
    path:"categoriaN/:id",component:KatalogNComponent
  },
  {
    path:'opt',component:OptCategoriaNComponent
  },
  {
    path:'opt/:id',component:OptKatalogNComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
