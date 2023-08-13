import { CollectionViewer, DataSource } from '@angular/cdk/collections'
import { BehaviorSubject, Observable } from 'rxjs'

import { Product } from '@models/product'

export class ProductDataSource extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([])
  originalData: Product[] = []

  override connect(collectionViewer: CollectionViewer): Observable<readonly Product[]> {
    return this.data
  }

  init(products: Product[]) {
    this.data.next(products)
    this.originalData = products
  }

  override disconnect(collectionViewer: CollectionViewer): void {
  }

  update(id: string, changes: Partial<Product>) {
    const index = this.originalData.findIndex((item) => item.id === id)
    if (index > -1) {
      this.originalData[index] = {
        ...this.originalData[index],
        ...changes
      }

      this.data.next(this.originalData)
    }
  }

  find(search: string) {
    this.data.next(this.originalData.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())))
  }

}
