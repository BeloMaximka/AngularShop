import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/database/models/product';
import { DataAccessService } from 'src/app/database/data-access.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent {
  public id: string = "";
  public product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private database: DataAccessService) {
    const nullableId = this.activatedRoute.snapshot.paramMap.get('id');
    if (nullableId === null) {
      this.router.navigate(["/products"]);
      return;
    }
    this.id = nullableId;
  }

  async ngOnInit() {
    try {
      this.product = await this.database.getProduct(this.id);
    } catch (error) {
      this.router.navigate(["/products"]);
      return;
    }
  }

}
