import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header_/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriaNComponent } from './content_/categoria-n/categoria-n.component';
import { KatalogNComponent } from './katalog_/katalog-n/katalog-n.component';
import { OptCategoriaNComponent } from './content_/opt-categoria-n/opt-categoria-n.component';
import {SharedVarService} from './_shared/services/shared-var.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CategoriaNComponent,
    KatalogNComponent,
    OptCategoriaNComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    SharedVarService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
