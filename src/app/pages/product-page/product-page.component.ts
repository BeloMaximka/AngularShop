import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  public id: string = "";
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const nullableId = this.activatedRoute.snapshot.paramMap.get('id');
    if (nullableId === null) {
      router.navigate(["/products"]);
      return;
    }
    this.id = nullableId;
  }
}
