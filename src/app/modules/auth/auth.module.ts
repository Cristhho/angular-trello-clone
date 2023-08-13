import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { SharedModule } from '@modules/shared/shared.module'
import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './pages/login/login.component'
import { BackgroundComponent } from './components/background/background.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component'
import { RegisterComponent } from './pages/register/register.component'
import { RegisterFormComponent } from './components/register-form/register-form.component'
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component'
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RecoveryFormComponent } from './components/recovery-form/recovery-form.component'

@NgModule({
  declarations: [
    LoginComponent,
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    LoginFormComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    RecoveryComponent,
    RecoveryFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
