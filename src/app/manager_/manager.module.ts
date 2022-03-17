import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { ManagerServiceModule } from './shared/sevices/maneger-service.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UiModule } from './../ui/ui.module';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
