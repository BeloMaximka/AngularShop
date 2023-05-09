import { Product } from "./product";

export class CountableProduct extends Product {
    constructor(_id: string, name: string, image: string, price: number, description: string, public count: number) {
        super(_id, name, image, price, description);
    }
}