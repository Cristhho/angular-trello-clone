import { Component } from '@angular/core'
import { faBell, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false

  bellIcon = faBell
  infoIcon = faCircleInfo
}
