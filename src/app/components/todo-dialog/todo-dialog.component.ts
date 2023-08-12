import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';

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

  constructor(
    private readonly dialogRef: DialogRef
  ) {}

  close() {
    this.dialogRef.close()
  }
}
