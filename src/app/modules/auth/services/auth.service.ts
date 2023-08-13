import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

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
}
