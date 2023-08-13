import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  iconTrello = faTrello
  iconBox = faBox
  iconWave = faWaveSquare
  iconClock = faClock
  iconAngleUp = faAngleUp
  iconAngleDown = faAngleDown
  iconHeart = faHeart
  iconBorderAll = faBorderAll
  iconUsers = faUsers
  iconGear = faGear
}
