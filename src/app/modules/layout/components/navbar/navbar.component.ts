import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { faBell, faCircleInfo, faClose, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { AuthService } from '@modules/auth/services/auth.service'

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

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
