import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OverlayModule } from '@angular/cdk/overlay'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    FontAwesomeModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
