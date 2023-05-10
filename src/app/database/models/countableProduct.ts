import { Product } from "./product";

export class CountableProduct {
    constructor(public product: Product, public count: number) {
    }
}