import { Component, Input } from '@angular/core'

import { COLORS, Color, HTMLButtonType } from '@types'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input()
  type: HTMLButtonType = 'button'

  @Input()
  color: Color = 'primary'

  @Input()
  textColor: string = 'text-white'

  @Input()
  disabled = false

  get colorClasses() {
    return COLORS[this.color]
  }
}
