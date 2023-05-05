import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './models/product';
import { lastValueFrom } from 'rxjs';
import { Comment } from './models/comment';

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

  public async getComments(id: string | null) {
    return await lastValueFrom(this.http.get<Comment[]>(this.baseUrl + `/get-comments?id=${id}`));
  }

  public async addComment(id: string, text: string) {
    const result = await lastValueFrom(this.http.post<any>(this.baseUrl + `/add-comment`, {
      productId: id,
      text: text
    }));
    return result.id as string | undefined;
  }
}
