import { Injectable, signal } from "@angular/core";
import { Product } from "app/products/data-access/product.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private readonly _cart = signal<Product[]>([]);
  public readonly cart = this._cart.asReadonly();

  public add(product: Product) {
    let index = this.getIndex(product);
    if (index < 0) {
      product.quantity = 1;
      this._cart.update(products => [...products, product]);
    } else {
      this._cart.update(products => {
        return products.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      })
    }
  }

  public remove(product: Product) {
    let index = this.getIndex(product);
    if (this._cart()[index].quantity > 1) {
      this._cart.update(products => {
        return products.map(p => p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p);
      })
    } else {
      this._cart.update(products => products.filter(p => p.id !== product.id))
    }

  }

  public getQuantity(product: Product): number {
    let index = this.getIndex(product);
    if (this._cart()[index].quantity > 1) {
      return this._cart()[index].quantity;
    }
    return 0;
  }

  public getIndex(product: Product) {
    return this._cart().findIndex(p => p.id === product.id);
  }

  public getCartSize(): number {
    return this._cart().reduce((acc, v) => acc + v.quantity, 0);
  }

  public getProducts(): Product[] {
    return this._cart();
  }
}
