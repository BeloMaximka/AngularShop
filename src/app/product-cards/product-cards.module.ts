import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardBasicComponent } from './product-card-basic/product-card-basic.component';

@NgModule({
  declarations: [
    ProductCardBasicComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardBasicComponent,
  ]
})
export class ProductCardsModule { }
