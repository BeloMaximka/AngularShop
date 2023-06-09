import { Component } from '@angular/core';
import { DataAccessService } from 'src/app/database/data-access.service';
import { Product } from 'src/app/database/models/product';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public loadedOnce = false;

  constructor(private database: DataAccessService) {
    this.getProducts();
  }

  public nameFilter: string = "";
  public filteredProducts: Product[] = [];
  public products: Product[] = [];
  
  private async getProducts() {
    this.products = await this.database.getProducts(true);
    this.filteredProducts = this.products;
    this.loadedOnce = true;
  }

  public searchFieldChange() {
    this.filteredProducts = this.products.filter(e => e.name.toLowerCase().includes(this.nameFilter.toLowerCase()));
  }

}
