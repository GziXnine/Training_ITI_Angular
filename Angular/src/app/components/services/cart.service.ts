import { Injectable } from '@angular/core';

interface iproduct {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  inStock: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: iproduct[] = [];

  getCart(): iproduct[] {
    return this.cart;
  }

  addToCart(product: iproduct): void {
    this.cart.push(product);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((p) => p.id !== productId);
  }

  clearCart(): void {
    this.cart = [];
  }
}
