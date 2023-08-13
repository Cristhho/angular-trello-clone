import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {CdkAccordionModule} from '@angular/cdk/accordion'
import {DragDropModule} from '@angular/cdk/drag-drop'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { BoardsRoutingModule } from './boards-routing.module'
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component'
import { SharedModule } from '@modules/shared/shared.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component'


@NgModule({
  declarations: [
    TodoDialogComponent,
    BoardsComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    BoardsRoutingModule,
    SharedModule
  ]
})
export class BoardsModule { }
