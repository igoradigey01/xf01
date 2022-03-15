import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {ContentComponent} from './content-old_/content/content.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CategoriaNComponent} from './content_/categoria-n/categoria-n.component'


const routes: Routes = [
  /* {
  path: '',
  component: ContentComponent}
 */
  {
    path: '',
    component: CategoriaNComponent}
  ,
  {
    path: 'menu',
    loadChildren: () => import('./header_/header.module').then((m) => m.HeaderModule),
  },

  {
    path: 'katalog',
    loadChildren: () => import('./content-old_/katalog.module').then((m) => m.KatalogModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
