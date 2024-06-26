import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';

const ROWS_HEIGHT: {[ id:number ]: number} = {1: 400, 3: 335, 4: 350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit, OnDestroy {
  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined;
  products: Product[] | undefined
  count = '12';
  sort = 'desc';
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort)
    .subscribe((_products)=> this.products = _products)
  }

  onColumnsCountChange(colsNum: number){
   this.cols = colsNum;
   this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategories(newCategory: string){
    console.log(newCategory)
    this.category = newCategory
  }

  onAddToCart(product: Product): void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

}
