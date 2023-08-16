import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Dialog } from '@angular/cdk/dialog'

import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component'
import { BoardService } from '../../services/board.service'
import { Board, BoardColumn, BoardCard } from '../../model/board'

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
export class BoardComponent implements OnInit {

  board?: Board

  constructor(
    private readonly dialog: Dialog,
    private readonly route: ActivatedRoute,
    private readonly boardService: BoardService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      if (id) {
        this.getBoard(id)
      }
    })
  }

  drop($event: CdkDragDrop<BoardCard[]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex)
    } else {
      transferArrayItem($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex)
    }
    const position = this.boardService.getPosition($event.container.data, $event.currentIndex)
    const card = $event.container.data[$event.currentIndex]
    const list = $event.container.id;
    this.updateCard(card, position, list)
  }

  dropColumn($event: CdkDragDrop<BoardColumn[]>) {
    moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex)
  }

  openModal(task: BoardCard) {
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

  private getBoard(id: string) {
    this.boardService.getBoardDetail(id).subscribe((res) => {
      this.board = res
    })
  }

  private updateCard(card: BoardCard, position: number, listId: string) {
    this.boardService.updateBoardCard(card.id, {position, listId: +listId}).subscribe()
  }
}
