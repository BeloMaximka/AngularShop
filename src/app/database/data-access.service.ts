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
    return await lastValueFrom(this.http.get<Product[]>(`${this.baseUrl}/get-products?${includePrice ? "price=true&" : ""}${includeDescription ? "description=true" : ""}`));
  }

  public async getProduct(id: string | null) {
    return await lastValueFrom(this.http.get<Product>(this.baseUrl + `/get-product?id=${id}`));
  }

  public async addProduct(product: Product) {
    return await lastValueFrom(this.http.post<Product>(this.baseUrl + `/add-product`, {
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description
    }));
  }

  public async removeProduct(id: string) {
    return await lastValueFrom(this.http.post<Product>(this.baseUrl + `/remove-product`, {
      id: id
    }));
  }

  public async getComments(id: string | null) {
    return await lastValueFrom(this.http.get<Comment[]>(this.baseUrl + `/get-comments?id=${id}`));
  }

  public async addComment(id: string, text: string) {
    return await lastValueFrom(this.http.post<Comment>(this.baseUrl + `/add-comment`, {
      productId: id,
      text: text
    }));
  }

  public async getShoppingCart() {
    return await lastValueFrom(this.http.get<CountableProduct[]>(this.baseUrl + `/get-shopping-cart`));
  }

  public async isShoppingCartItemExists(id: string) {
    return await lastValueFrom(this.http.get<boolean>(this.baseUrl + `/shopping-cart-item-exists?id=${id}`));
  }
  
  public async addShoppingCartItem(id: string, count: number = 1) {
    return await lastValueFrom(this.http.post<CountableProduct>(this.baseUrl + `/add-to-shopping-cart`, {
      productId: id,
      count: count
    }));
  }

  public async removeShoppingCartItem(id: string, count: number = 1) {
    return await lastValueFrom(this.http.post<string>(this.baseUrl + `/remove-from-shopping-cart`, {
      productId: id,
    }));
  }
}
