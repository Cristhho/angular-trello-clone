import { Component, OnInit } from '@angular/core'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons'

import { BoardService } from '../../services/board.service'
import { Board } from '../../model/board'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {
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

  boards: Board[] = []

  constructor(
    private readonly boardService: BoardService
  ) {}

  ngOnInit() {
    this.getAllBoards()
  }

  getAllBoards() {
    this.boardService.getUserBoards().subscribe((res) => this.boards = res)
  }
}
