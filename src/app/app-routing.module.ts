import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PriceComponent} from './price/price.component';

const routes: Routes = [{
  path: '',
  component: ContentComponent},
  {
    path: 'price',
    component: PriceComponent},
  {
    path: 'menu',
    loadChildren: () => import('./Header/header.module').then((m) => m.HeaderModule),
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
