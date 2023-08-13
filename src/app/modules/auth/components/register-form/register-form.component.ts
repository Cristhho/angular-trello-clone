import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { Status } from '@types'
import { CustomValidators } from '@utils/validators'
import { AuthService } from '../../services/auth.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  iconEye = faEye
  iconEyeSlash = faEyeSlash

  status: Status = 'init'
  errorMessage = ''
  showPassword = false

  form!: FormGroup
  get nameField() {
    return this.form.get('name')
  }
  get emailField() {
    return this.form.get('email')
  }
  get passwordField() {
    return this.form.get('password')
  }
  get confirmField() {
    return this.form.get('confirmPassword')
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.buildForm()
  }

  private buildForm() {
    this.form = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
    })
  }

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      this.authService.register({
        name, email, password
      }).subscribe({
        next: () => {
          this.status = 'success'
          this.router.navigate(['/login'])
        },
        error: (error) => {
          this.status = 'failed'
          if (error instanceof HttpErrorResponse) {
            if (error.error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
              this.errorMessage = 'Email already taken by other user'
            } else if (error.error.error) {
              this.errorMessage = error.error.message[0]
            }
          }
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
