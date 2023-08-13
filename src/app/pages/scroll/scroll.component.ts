import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Product } from '@models/product'

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

  products: Product[] = []

  constructor(
    private readonly httClient: HttpClient
  ) {
    this.httClient.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((res) => {
        this.products = res
      })
  }
}
