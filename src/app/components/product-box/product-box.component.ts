import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter<any>()
  product: Product | undefined = {
    id: 1,
    title: 'Bola de futebol',
    price: 100,
    category: 'category 1',
    description: 'description 1',
    image: 'https://via.placeholder.com/150'
  }
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }
}
