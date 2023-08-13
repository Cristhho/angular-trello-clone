import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Status } from '@types'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {

  emailSent = false
  status: Status = 'init'

  form!: FormGroup
  get emailField() {
    return this.form.get('email')
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.buildForm()
  }

  private buildForm() {
    this.form = this.formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]]
    })
  }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading'
      const { email } = this.form.getRawValue()
      this.authService.recovery(email).subscribe({
        next: () => {
          this.status = 'success'
          this.emailSent = true
        },
        error: () => {
          this.status = 'error'
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
