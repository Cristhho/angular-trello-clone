import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { switchMap } from 'rxjs'

import { enviroment } from '@enviroments/enviroment'
import { RegisterDTO } from '../model/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = enviroment.API_URL

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.httpClient.post(`${this.apiUrl}/auth/login`, {
      email, password
    })
  }

  register(body: RegisterDTO) {
    return this.httpClient.post(`${this.apiUrl}/auth/register`, body)
  }

  registerAndLogin(body: RegisterDTO) {
    return this.register(body).pipe(
      switchMap(() => this.login(body.email, body.password))
    )
  }

  isAvailable(email: string) {
    return this.httpClient.post<{isAvailable: boolean}>(`${this.apiUrl}/auth/is-available`, {email})
  }

  recovery(email: string) {
    return this.httpClient.post(`${this.apiUrl}/auth/recovery`, {email})
  }

  changePassword(token: string, password: string) {
    return this.httpClient.post(`${this.apiUrl}/auth/change-password`, {token, newPassword: password})
  }
}
