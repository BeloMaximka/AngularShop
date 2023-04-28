import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductCardsModule } from '../product-cards/product-cards.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ProductPageComponent,
    AdminPageComponent,
    ShoppingCartPageComponent
  ],
  imports: [
    CommonModule,
    ProductCardsModule
  ]
})
export class PagesModule { }
