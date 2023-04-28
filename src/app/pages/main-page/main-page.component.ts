import { Component } from '@angular/core';
import { Product } from 'src/app/product-cards/product';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  myProduct: Product = {
    name: "apple",
    image: "...",
    price: 20
  }
}
