import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'

import { Product } from '@models/product'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  products: Product[] = []
  columns = ['id', 'title', 'price', 'cover']

  constructor(
    private readonly httClient: HttpClient
  ) {
    this.httClient.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((res) => {
        this.products = res
      })
  }
}
