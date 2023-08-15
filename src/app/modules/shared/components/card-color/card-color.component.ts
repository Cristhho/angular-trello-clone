import { Component, Input } from '@angular/core'

import { COLORS, Color } from '@types'

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html'
})
export class CardColorComponent {

  @Input()
  color: Color = 'sky'

  @Input()
  textColor: string = 'text-white'

  get colorClasses() {
    return COLORS[this.color]
  }
}
