import { Component } from '@angular/core';
import { DataAccessService } from 'src/app/database/data-access.service';
import { Product } from 'src/app/database/models/product';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  public product: Product = new Product('', '', '', 0, '');
  public isImageLoaded = false;
  public products: Product[] = [];

  constructor(private database: DataAccessService) {
    this.getProducts()
  }
  
  onImgError() {
    this.isImageLoaded = false;
  }

  onImgLoad() {
    this.isImageLoaded=true;
  }

  
  
  private async getProducts() {
    this.products = await this.database.getProducts();
  }
}
