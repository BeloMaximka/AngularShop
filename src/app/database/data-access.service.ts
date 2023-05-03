import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './models/product';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = "http://localhost:9312";

  public async getProducts() {
    return await lastValueFrom(this.http.get<Product[]>(this.baseUrl + "/get-products"));
  }
}
