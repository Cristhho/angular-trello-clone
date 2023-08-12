import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { Component, Inject } from '@angular/core'
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons'

import { Todo } from '@models/todo'

interface Data {
  task: Todo
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

  task: Todo

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
