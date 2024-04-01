import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [
      {
        id: 12,
        product: 'Product 1',
        name: 'Product 1',
        price: 100,
        quantity: 1
      }
    ]
  }
  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getTotal(cartItems: CartItem[]): number {
    return this.cartService.getTotal(cartItems)
  }

}
