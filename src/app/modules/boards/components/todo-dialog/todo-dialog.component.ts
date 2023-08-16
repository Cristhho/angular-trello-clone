import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { Component, Inject } from '@angular/core'
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons'

import { BoardCard } from '../../model/board'

interface Data {
  task: BoardCard
}
interface OutData {
  res: boolean
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  iconClose = faClose
  iconSlot = faCheckToSlot
  iconBars = faBars
  iconUser = faUser
  iconTag = faTag
  iconCheck = faCheckSquare
  iconClock = faClock

  task: BoardCard

  constructor(
    private readonly dialogRef: DialogRef<OutData>,
    @Inject(DIALOG_DATA) private readonly data: Data
  ) {
    this.task = this.data.task
  }

  close() {
    this.dialogRef.close({
      res: true
    })
  }
}
