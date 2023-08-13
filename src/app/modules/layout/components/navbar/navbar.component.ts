import { Component } from '@angular/core'
import { faBell, faCircleInfo, faClose, faAngleDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false
  isOpenOverlayBoards = false

  bellIcon = faBell
  infoIcon = faCircleInfo
  closeIcon = faClose
  angleDownIcon = faAngleDown
}
