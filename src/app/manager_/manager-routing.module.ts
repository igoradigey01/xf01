import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerGuard } from './manager.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
