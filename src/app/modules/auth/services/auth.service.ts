import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { switchMap, tap } from 'rxjs'

import { enviroment } from '@enviroments/enviroment'
import { LoginResponse, RegisterDTO } from '../model/auth'
import { TokenService } from './token.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = enviroment.API_URL

  constructor(
    private readonly httpClient: HttpClient,
    private readonly token: TokenService
  ) { }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/auth/login`, {
      email, password
    }).pipe(
      tap((res) => {
        this.token.saveToken(res.access_token)
        this.token.saveRefreshToken(res.refresh_token)
      })
    )
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

  logout() {
    this.token.deleteToken()
  }

  refreshToken() {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/auth/refresh-token`, {
      refreshToken: this.token.getRefreshToken()
    }).pipe(
      tap((res) => {
        this.token.saveToken(res.access_token)
        this.token.saveRefreshToken(res.refresh_token)
      })
    )
  }
}
