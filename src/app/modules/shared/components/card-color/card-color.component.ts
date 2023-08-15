import { Component, Input } from '@angular/core'

import { Color } from '@types'

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html'
})
export class CardColorComponent {

  @Input()
  color: Color = 'sky'

  get colorClasses() {
    switch (this.color) {
      case 'sky' :
        return 'bg-sky-700 hover:bg-sky-800 text-white'
      case 'gray':
        return 'bg-gray-700 hover:bg-gray-800 text-white'
      case 'green':
        return 'bg-green-700 hover:bg-green-800 text-white'
      case 'red':
        return 'bg-red-700 hover:bg-red-800 text-white'
      case 'violet':
        return 'bg-violet-700 hover:bg-violet-800 text-white'
      case 'yellow':
        return 'bg-yellow-700 hover:bg-yellow-800 text-white'
      default:
        return 'bg-primary-500 hover:bg-primary-700'
    }
  }
}
