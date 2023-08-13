import { Component, Input } from '@angular/core'

import { HTMLButtonType } from '@types'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input()
  type: HTMLButtonType = 'button'

  @Input()
  color: string = 'primary'

  @Input()
  textColor: string = 'text-white'

  get colorClasses() {
    switch (this.color) {
      case 'success' :
        return 'bg-success-500 hover:bg-success-700'
      case 'error':
        return 'bg-red-500 hover:bg-red-700'
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-700'
      case 'gray-light':
        return 'bg-gray-200 hover:bg-gray-400'
      default:
        return 'bg-primary-500 hover:bg-primary-700'
    }
  }
}
