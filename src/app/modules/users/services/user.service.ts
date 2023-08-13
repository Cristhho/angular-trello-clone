import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { enviroment } from '@enviroments/enviroment'
import { User } from '@models/user'
import { TokenService } from '@modules/auth/services/token.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = enviroment.API_URL
  private readonly token: string

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {
    this.token = this.tokenService.getToken()!
  }

  getUsers() {
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
  }
}
