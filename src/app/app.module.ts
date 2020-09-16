import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BannerProductComponent } from './banner-product/banner-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopBarComponent,
    BannerProductComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
