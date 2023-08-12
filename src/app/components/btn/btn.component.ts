import { Component, Input } from '@angular/core'

import { HTMLButtonType } from '@types'

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input()
  type: HTMLButtonType = 'button'

  @Input()
  color: string = 'primary'

  @Input()
  textColor: string = 'text-white'

  get colorClasses() {
    return `bg-${this.color}-500 hover:bg-${this.color}-700`;
  }
}
