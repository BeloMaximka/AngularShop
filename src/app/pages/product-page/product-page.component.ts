import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/database/models/product';
import { DataAccessService } from 'src/app/database/data-access.service';
import { Comment } from 'src/app/database/models/comment';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent {
  public id: string = "";
  public product: Product | undefined;
  public comments: Comment[] = [];
  public newCommentText = "";

  public isInCart = false;
  public addToCardMessage = "Add to cart";

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private database: DataAccessService, public shoppingCart: ShoppingCartService) {
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
      this.comments = await this.database.getComments(this.id);
      this.isInCart = await this.shoppingCart.isExists(this.product._id);
      if(this.isInCart) {
        this.addToCardMessage = "In cart";
      }
    } catch (error) {
      this.router.navigate(["/products"]);
      return;
    }
  }

  public async addComment() {
    try {
      const comment = await this.database.addComment(this.id, this.newCommentText)
      this.comments.unshift(comment);
    } catch (error) {
    }
  }

  public async addToShoppingCart() {
    this.shoppingCart.addToShoppingCart(this.product?._id!);
    this.isInCart = true;
    this.addToCardMessage = "In cart";
  }
}
