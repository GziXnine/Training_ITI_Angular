import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

interface iproduct {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  inStock: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  products: iproduct[] = [
    {
      id: 1,
      name: 'Keyboard',
      price: 400,
      imgUrl: 'https://placehold.co/300x200/f0f0f0/888888?text=Keyboard',
      inStock: 'In Stock',
    },
    {
      id: 2,
      name: 'Headphones',
      price: 800,
      imgUrl: 'https://placehold.co/300x200/004/c3daff?text=Headphones',
      inStock: 'In Stock',
    },
    {
      id: 3,
      name: 'Laptop',
      price: 10000,
      imgUrl: 'https://placehold.co/300x200/ffcccb/e6e6fa?text=Laptop',
      inStock: 'In Stock',
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 2500,
      imgUrl: 'https://placehold.co/300x200/ffeecc/333333?text=Smartwatch',
      inStock: 'Out Of Stock',
    },
    {
      id: 5,
      name: 'Monitor',
      price: 4500,
      imgUrl: 'https://placehold.co/300x200/ccffee/111111?text=Monitor',
      inStock: 'In Stock',
    },
    {
      id: 6,
      name: 'Tablet',
      price: 6000,
      imgUrl: 'https://placehold.co/300x200/ccddff/333333?text=Tablet',
      inStock: 'In Stock',
    },
    {
      id: 7,
      name: 'Gaming Mouse',
      price: 650,
      imgUrl: 'https://placehold.co/300x200/333333/ffffff?text=Gaming+Mouse',
      inStock: 'In Stock',
    },
    {
      id: 8,
      name: 'Webcam',
      price: 700,
      imgUrl: 'https://placehold.co/300x200/ddd/222?text=Webcam',
      inStock: 'In Stock',
    },
    {
      id: 9,
      name: 'Microphone',
      price: 950,
      imgUrl: 'https://placehold.co/300x200/ffeeee/666666?text=Microphone',
      inStock: 'Out Of Stock',
    },
    {
      id: 10,
      name: 'Speakers',
      price: 1200,
      imgUrl: 'https://placehold.co/300x200/bbffcc/444444?text=Speakers',
      inStock: 'In Stock',
    },
    {
      id: 11,
      name: 'Charger',
      price: 300,
      imgUrl: 'https://placehold.co/300x200/e6f0ff/555555?text=Charger',
      inStock: 'In Stock',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: iproduct): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
