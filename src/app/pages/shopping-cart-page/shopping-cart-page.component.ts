import { Component } from '@angular/core';
import { CountableProduct } from 'src/app/database/models/countableProduct';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent {
  public products: CountableProduct[] = [];

  constructor(public shoppingCart: ShoppingCartService) {
    this.products = this.shoppingCart.getCart();
  }

  public async removeFromShoppingCart(id: string) {
    this.shoppingCart.removeFromShoppingCart(id);
  }

  public async decProductCount(product: CountableProduct) {
    if (product.count <= 1) {
      return;
    }
    this.shoppingCart.setShoppingCartItemCount(product.product._id, product.count - 1);
  }
  public async incProductCount(product: CountableProduct) {
    this.shoppingCart.setShoppingCartItemCount(product.product._id, product.count + 1);
  }
  public async clearShoppingCart() {
    await this.shoppingCart.clear();
  }
}
