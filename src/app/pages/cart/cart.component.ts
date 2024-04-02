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
    this.cartService.cart.subscribe((_cart: Cart)=>{
      this.cart = _cart
      this.dataSource = this.cart.items;
    })
  }

  getTotal(cartItems: CartItem[]): number {
    return this.cartService.getTotal(cartItems)
  }

  onClearCart(): void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
  }

}
