import { Component, Input } from '@angular/core';
import { Product } from '../../database/models/product';

@Component({
  selector: 'product-card-basic',
  templateUrl: './product-card-basic.component.html',
  styleUrls: ['./product-card-basic.component.css']
})
export class ProductCardBasicComponent {
  @Input() product: Product | undefined;
}
