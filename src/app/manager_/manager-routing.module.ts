import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerGuard } from './manager.guard';
import { ManagerBarComponent } from './manager-bar/manager-bar.component';
import { InfoComponent } from './info/info.component';
import {KatalogNMainComponent} from './katalog-n_/katalog-n-main/katalog-n-main.component'
import {CategoriaNMainComponent} from './categoria-n_/categoria-n-main/categoria-n-main.component'
import {ColorNMainComponent} from './color-n_/color-n-main/color-n-main.component';
import {BrandMainComponent} from './brand-n_/brand-main/brand-main.component';
import {ArticleNMainComponent} from './article-n_/article-n-main/article-n-main.component'
import {NomenclatureMainComponent} from './nomenclature_/nomenclature-main/nomenclature-main.component'




const routes: Routes = [
  { path: '', component: ManagerBarComponent },
  {path:'katalog-n',component:KatalogNMainComponent},
  {path:'categoria-n',component:CategoriaNMainComponent},
  {path:'color-n',component:ColorNMainComponent},
  {path:'brand-n',component:BrandMainComponent},
  {path:'article-n',component:ArticleNMainComponent},
  {path:'nomenclature',component:NomenclatureMainComponent },
  { path: 'info', component: InfoComponent, canActivate: [ManagerGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ManagerGuard]
})
export class ManagerRoutingModule { }
