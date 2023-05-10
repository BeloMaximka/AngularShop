import { Component } from '@angular/core';
import { CountableProduct } from 'src/app/database/models/countableProduct';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent {
  public loadedOnce = false;

  constructor(public shoppingCart: ShoppingCartService) {
  }

  public async removeFromShoppingCart(id: string ) {
    this.shoppingCart.removeFromShoppingCart(id);
  }
}
