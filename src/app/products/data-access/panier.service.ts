import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class PanierService {
  private readonly _products: Product[] = [];

  public add(product: Product) {
    this._products.push(product);
  }

  public getCartSize(): number {
    return this._products.length;
  }

  public getProducts(): Product[] {
    return this._products;
  }
}
