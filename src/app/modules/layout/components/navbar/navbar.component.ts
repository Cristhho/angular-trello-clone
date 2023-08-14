import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { faBell, faCircleInfo, faClose, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { AuthService } from '@modules/auth/services/auth.service'
import { User } from '@models/user'
import { ProfileService } from '@modules/profile/services/profile.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isOpen = false
  isOpenOverlayBoards = false

  bellIcon = faBell
  infoIcon = faCircleInfo
  closeIcon = faClose
  angleDownIcon = faAngleDown

  user?: User

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.user$.subscribe((user) => this.user = user)
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
