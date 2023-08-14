import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { enviroment } from '@enviroments/enviroment'
import { checkToken } from '@interceptors/token.interceptor'
import { User } from '@models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = enviroment.API_URL

  constructor(
    private httpClient: HttpClient
  ) {}

  getUsers() {
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`, {
      context: checkToken()
    })
  }
}
