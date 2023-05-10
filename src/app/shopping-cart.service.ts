import { Injectable } from '@angular/core';
import { CountableProduct } from './database/models/countableProduct';
import { DataAccessService } from 'src/app/database/data-access.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public cart: CountableProduct[] = [];
  constructor(private database: DataAccessService) {
    this.loadShoppingCart();
  }

  public getCart() {
    return this.cart;
  }

  public async isExists(id : string) {
    return await this.database.isShoppingCartItemExists(id);
  }

  private async loadShoppingCart() {
    this.cart = await this.database.getShoppingCart();
  }

  public async addToShoppingCart(id: string) {
    const result = await this.database.addShoppingCartItem(id, 1)
    this.cart.unshift(result);
  }
  public async removeFromShoppingCart(id: string) {
    const result = await this.database.removeShoppingCartItem(id, 1)
    this.cart.splice(this.cart.findIndex(i => i.product._id === result, 1));
  }
}
