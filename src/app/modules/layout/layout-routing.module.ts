import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from './components/layout/layout.component'
import { authGuard } from '../../guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'boards',
        pathMatch: 'full'
      },
      {
        path: 'boards',
        loadChildren: () => import('../boards/boards.module').then((m) => m.BoardsModule),
        canActivate: [authGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then((m) => m.ProfileModule),
        canActivate: [authGuard]
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
        canActivate: [authGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
