import { Injectable } from '@angular/core';
import { CountableProduct } from './database/models/countableProduct';
import { DataAccessService } from 'src/app/database/data-access.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart: CountableProduct[] = [];
  private totalPrice = 0;
  constructor(private database: DataAccessService) {
    this.loadShoppingCart();
  }

  public getCart() {
    return this.cart;
  }

  public getTotalPrice() {
    return this.totalPrice;
  }

  public async isExists(id: string) {
    return await this.database.isShoppingCartItemExists(id);
  }

  private async loadShoppingCart() {
    this.cart = await this.database.getShoppingCart();
    this.totalPrice = this.cart.reduce((sum, a) => sum + a.count * a.product.price, 0);
  }

  public async addToShoppingCart(id: string) {
    const result = await this.database.addShoppingCartItem(id, 1)
    this.cart.unshift(result);
  }
  public async removeFromShoppingCart(id: string) {
    await this.database.removeShoppingCartItem(id)

    const index = this.cart.findIndex(i => i.product._id === id);
    this.totalPrice -= this.cart[index].count * this.cart[index].product.price;
    this.cart.splice(index, 1);
  }

  public async clear() {
    await this.database.clearShoppingCart();
    this.cart.splice(0, this.cart.length);
  }

  public async setShoppingCartItemCount(id: string, count: number) {
    if (await this.database.updateShoppingCartItem(id, count)) {
      const product = this.cart.find(i => i.product._id === id);
      if (product !== undefined) {
        this.totalPrice -= (product.count - count) * product.product.price
        product.count = count;
      }
    }
  }
}
