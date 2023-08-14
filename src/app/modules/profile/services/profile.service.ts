import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { enviroment } from '@enviroments/enviroment'
import { User } from '@models/user'
import { TokenService } from '@modules/auth/services/token.service'
import { BehaviorSubject, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly apiUrl = enviroment.API_URL
  private readonly token: string

  user$ = new BehaviorSubject<User | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {
    this.token = this.tokenService.getToken()!
  }

  getProfile() {
    return this.httpClient.get<User>(`${this.apiUrl}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      tap((res) => this.user$.next(res))
    )
  }
}
