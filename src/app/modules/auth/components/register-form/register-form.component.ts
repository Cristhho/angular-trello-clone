import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { Status } from '@types'
import { CustomValidators } from '@utils/validators'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  iconEye = faEye
  iconEyeSlash = faEyeSlash

  status: Status = 'init'
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
  ) {
    this.buildForm()
  }

  private buildForm() {
    this.form = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
    })
  }

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();

    } else {
      this.form.markAllAsTouched();
    }
  }
}
