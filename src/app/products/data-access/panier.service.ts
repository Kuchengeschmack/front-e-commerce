import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class PanierService {
  private readonly _products: Product[] = [];

  public add(product: Product) {
    if (this._products.includes(product)) {
      this._products[
        this._products.findIndex((p) => p.id === product.id)
      ].quantity += 1;
    } else {
      product.quantity = 1;
      this._products.push(product);
    }
  }

  public getCartSize(): number {
    return this._products.reduce((acc, v)=> acc + v.quantity, 0);
  }

  public getProducts(): Product[] {
    return this._products;
  }
}
