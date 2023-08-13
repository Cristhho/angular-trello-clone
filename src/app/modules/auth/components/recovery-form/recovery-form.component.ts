import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { Status } from '@types'
import { CustomValidators } from '@utils/validators'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent {

  iconEye = faEye
  iconEyeSlash = faEyeSlash

  status: Status = 'init'
  showPassword = false
  token = ''

  form!: FormGroup
  get passwordField() {
    return this.form.get('password')
  }
  get confirmField() {
    return this.form.get('confirmPassword')
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.buildForm()
    this.route.queryParamMap.subscribe((query) => {
      const token = query.get('token')
      if (token) {
        this.token = token
      } else {
        this.router.navigate(['/login'])
      }
    })
  }

  private buildForm() {
    this.form = this.formBuilder.nonNullable.group({
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: [CustomValidators.MatchValidator('password', 'confirmPassword')]
    })
  }

  changePassword() {
    if (this.form.valid) {
      this.status = 'loading'
      const { password } = this.form.getRawValue()
      this.authService.changePassword(this.token, password).subscribe({
        next: () => {
          this.status = 'success'
          this.router.navigate(['/login'])
        },
        error: () => {
          this.status = 'failed'
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
