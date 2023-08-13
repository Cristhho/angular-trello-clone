import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {OverlayModule} from '@angular/cdk/overlay'
import {CdkAccordionModule} from '@angular/cdk/accordion'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {DialogModule} from '@angular/cdk/dialog'
import {ScrollingModule} from '@angular/cdk/scrolling'
import {CdkTableModule} from '@angular/cdk/table'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BtnComponent } from './components/btn/btn.component'
import { BoardsComponent } from './pages/boards/boards.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { BoardComponent } from './pages/board/board.component'
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component'
import { ScrollComponent } from './pages/scroll/scroll.component'
import { HttpClientModule } from '@angular/common/http'
import { TableComponent } from './pages/table/table.component'

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent,
    BoardComponent,
    TodoDialogComponent,
    ScrollComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    HttpClientModule,
    ScrollingModule,
    CdkTableModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
