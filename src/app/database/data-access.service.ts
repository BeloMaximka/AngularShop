import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './models/product';
import { lastValueFrom } from 'rxjs';
import { Comment } from './models/comment';
import { CountableProduct } from './models/countableProduct';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = "http://localhost:9312";

  public async getProducts(includePrice = false, includeDescription = false) {
    return await lastValueFrom(this.http.get<Product[]>(`${this.baseUrl}/products?${includePrice ? "price=true&" : ""}${includeDescription ? "description=true" : ""}`));
  }

  public async getProduct(id: string | null) {
    return await lastValueFrom(this.http.get<Product>(this.baseUrl + `/products/${id}`));
  }

  public async addProduct(product: Product) {
    return await lastValueFrom(this.http.post<Product>(this.baseUrl + `/products`, {
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description
    }));
  }

  public async removeProduct(id: string) {
    return await lastValueFrom(this.http.delete<Product>(this.baseUrl + `/products/${id}`));
  }

  public async getComments(id: string | null) {
    return await lastValueFrom(this.http.get<Comment[]>(this.baseUrl + `/comments/${id}`));
  }

  public async addComment(id: string, text: string) {
    return await lastValueFrom(this.http.post<Comment>(this.baseUrl + `/comments`, {
      productId: id,
      text: text
    }));
  }

  public async getShoppingCart() {
    return await lastValueFrom(this.http.get<CountableProduct[]>(this.baseUrl + `/shopping-cart-items`));
  }

  public async isShoppingCartItemExists(id: string) {
    return await lastValueFrom(this.http.get<boolean>(this.baseUrl + `/shopping-cart-item-exists/${id}`));
  }
  
  public async addShoppingCartItem(id: string, count: number = 1) {
    return await lastValueFrom(this.http.post<CountableProduct>(this.baseUrl + `/shopping-cart-items`, {
      productId: id,
      count: count
    }));
  }

  public async removeShoppingCartItem(id: string) {
    return await lastValueFrom(this.http.delete<string>(this.baseUrl + `/shopping-cart-items/${id}`));
  }

  public async updateShoppingCartItem(id: string, count: number = 1) {
    return await lastValueFrom(this.http.put<boolean>(this.baseUrl + `/shopping-cart-items/${id}`, {
      count
    }));
  }
  public async clearShoppingCart() {
    return await lastValueFrom(this.http.delete<boolean>(this.baseUrl + `/shopping-cart-items`));
  }
}
