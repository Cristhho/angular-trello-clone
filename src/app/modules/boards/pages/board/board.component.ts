import { Component } from '@angular/core'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Dialog } from '@angular/cdk/dialog'

import { BoardColumn, Todo } from '@models/todo'
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [`
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
  `]
})
export class BoardComponent {

  columns: BoardColumn[] = [
    {title: 'ToDo', tasks: [
      {id: '1', title: 'Task 1'},
      {id: '2', title: 'Task 2'},
      {id: '3', title: 'Task 3'}
    ]},
    {title: 'Doing', tasks: [
      {id: '4', title: 'Watch Angular courses'}
    ]},
    {title: 'Done', tasks: [
      {id: '5', title: 'Play videogames'}
    ]}
  ]

  constructor(
    private readonly dialog: Dialog
  ) {}

  drop($event: CdkDragDrop<Todo[]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex)
    } else {
      transferArrayItem($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex)
    }
  }

  dropColumn($event: CdkDragDrop<BoardColumn[]>) {
    moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex)
  }

  openModal(task: Todo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '75%',
      autoFocus: false,
      data: {
        task
      }
    })
    dialogRef.closed.subscribe((output) => {
      console.log(output)
    })
  }
}
