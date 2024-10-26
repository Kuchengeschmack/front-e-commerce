import { Injectable, signal } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class PanierService {
  private readonly _products = signal<Product[]>([]);
  public readonly products = this._products.asReadonly();

  public add(product: Product) {
    let index = this.getIndex(product);
    if (index < 0) {
      product.quantity = 1;
      this._products.update(products => [...products, product]);
    } else {
      this._products.update(products => {
        return products.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      })
    }
  }

  public remove(product: Product) {
    let index = this.getIndex(product);
    if (this._products()[index].quantity > 1) {
      this._products.update(products => {
        return products.map(p => p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p);
      })
    } else {
      this._products.update(products => products.filter(p => p.id !== product.id))
    }

  }

  public getQuantity(product: Product): number {
    let index = this.getIndex(product);
    if (this._products()[index].quantity > 1) {
      return this._products()[index].quantity;
    }
    return 0;
  }

  public getIndex(product: Product) {
    return this._products().findIndex(p => p.id === product.id);
  }

  public getCartSize(): number {
    return this._products().reduce((acc, v) => acc + v.quantity, 0);
  }

  public getProducts(): Product[] {
    return this._products();
  }
}
