import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ShopComponent } from './shop/shop.component';

import {Routes, RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import { Products } from '../assets/products_json';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'shop', 
    component: ShopComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [Products],
  bootstrap: [AppComponent]
})
export class AppModule { }
