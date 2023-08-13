import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

import { Product } from '@models/product'
import { ProductDataSource } from './data-source'
import { debounceTime } from 'rxjs'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  products = new ProductDataSource()
  columns = ['id', 'title', 'price', 'cover', 'actions']
  search = new FormControl('', { nonNullable: true })

  constructor(
    private readonly httClient: HttpClient
  ) {
    this.httClient.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((res) => {
        this.products.init(res)
      })

    this.search.valueChanges
    .pipe(debounceTime(500)).subscribe((value) => {
      this.products.find(value)
    })
  }

  update(product: Product) {
    this.products.update(product.id, {
      price: 100
    })
  }
}
