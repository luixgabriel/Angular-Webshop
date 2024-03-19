import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[ id:number ]: number} = {1: 400, 3: 335, 4: 350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(ROWS_HEIGHT)
  }
  onColumnsCountChange(colsNum: number){
   this.cols = colsNum;
   this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategories(newCategory: string){
    console.log(newCategory)
    this.category = newCategory
  }

}
