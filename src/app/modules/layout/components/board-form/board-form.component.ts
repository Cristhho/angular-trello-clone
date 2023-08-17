import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BoardService } from '@modules/boards/services/board.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html'
})
export class BoardFormComponent {

  @Output()
  closeOverlay = new EventEmitter()

  form!: FormGroup
  get titleField() {
    return this.form.get('title')
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly boardService: BoardService
  ) {
    this.buildForm()
  }

  private buildForm() {
    this.form = this.formBuilder.nonNullable.group({
      title: ['', Validators.required],
      backgroundColor: ['', Validators.required]
    })
  }

  create() {
    if (this.form.valid) {
      const {title, backgroundColor} = this.form.getRawValue()
      this.boardService.createBoard({title, backgroundColor})
        .subscribe((res) => {
          this.closeOverlay.emit()
          this.router.navigate(['/app/boards', res.id])
        })
    } else {
      this.form.markAllAsTouched()
    }
  }
}
