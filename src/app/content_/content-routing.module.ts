import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KatalogNComponent } from './katalog_/katalog-n/katalog-n.component';
import { OptKatalogNComponent } from './katalog_/opt-katalog-n/opt-katalog-n.component';
import { OptCategoriaNComponent } from './categoria_/opt-categoria-n/opt-categoria-n.component';
import { PrivacyComponent } from './privacy-policy/privacy.component';
import { NomenclatureComponent } from './nomenclature_/nomenclature/nomenclature.component';
import {OptNomenclatureComponent} from './nomenclature_/opt-nomenclature/opt-nomenclature.component'

const routes: Routes = [
  {
    path: 'categoria/:id', component: KatalogNComponent,
  },
  { path: 'categoria/katalog/:id', component: NomenclatureComponent },
  { path: 'privacy', component: PrivacyComponent },
  {
    path: 'opt', component: OptCategoriaNComponent,
  },
  {
    path: 'opt/:id',  component: OptKatalogNComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule { }
