import { Component, OnInit } from '@angular/core'

import { ProfileService } from '@modules/profile/services/profile.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor(
    private readonly profileService: ProfileService
  ){}

  ngOnInit() {
    this.profileService.getProfile().subscribe()
  }

}
