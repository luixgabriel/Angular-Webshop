import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {

  // Mandar informações fora do seu componente para componentes parentes
  @Output() columnsCountChange = new EventEmitter<number>()
  constructor() { }
  sort = 'desc'
  itensShowCount = 12;

  ngOnInit(): void {
  }

  onSortUpdate(newSort: string): void{
    this.sort = newSort
  }

  onItemsUpdate(value: number){
    this.itensShowCount = value;
  }

  onColumnsUpdate(colsNum: number): void{
    this.columnsCountChange.emit(colsNum)
  }
}
