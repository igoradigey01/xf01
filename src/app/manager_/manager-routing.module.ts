import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerGuard } from './manager.guard';
import { ManagerBarComponent } from './manager-bar/manager-bar.component';
import { InfoComponent } from './info/info.component';
import {KatalogNMainComponent} from './katalog-n_/katalog-n-main/katalog-n-main.component'
import {CategoriaNMainComponent} from './categoria-n_/categoria-n-main/categoria-n-main.component'




const routes: Routes = [
  { path: '', component: ManagerBarComponent },
  {path:'katalog-n',component:KatalogNMainComponent},
  {path:'categoria-n',component:CategoriaNMainComponent},
  { path: 'info', component: InfoComponent, canActivate: [ManagerGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ManagerGuard]
})
export class ManagerRoutingModule { }
