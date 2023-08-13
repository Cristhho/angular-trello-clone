import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { AuthService } from '../../services/auth.service'
import { Status } from '@types'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  iconPen = faPen
  iconEye = faEye
  iconEyeSlash = faEyeSlash

  status: Status = 'init'
  showPassword = false

  form!: FormGroup
  get emailField() {
    return this.form.get('email')
  }
  get passwordField() {
    return this.form.get('password')
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly authService: AuthService,
  ) {
    this.buildForm()
    this.route.queryParamMap.subscribe((query) => {
      if (query.has('email')) {
        this.emailField?.setValue(query.get('email'))
      }
    })
  }

  private buildForm() {
    this.form = this.formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [ Validators.required, Validators.minLength(6)]]
    })
  }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading'
      const { email, password } = this.form.getRawValue();
      this.authService.login(email, password).subscribe({
        next: () => {
          this.status = 'success'
          this.router.navigate(['/app'])
        },
        error: () => this.status = 'failed'
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
