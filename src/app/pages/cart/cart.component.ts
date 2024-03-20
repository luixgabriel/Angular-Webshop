import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  getTotal(items: CartItem[]){
    return items.map((item)=> item.price * item.quantity).reduce((prev, current) => prev + current, 0)
  }

}
