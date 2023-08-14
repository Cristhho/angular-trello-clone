import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, tap } from 'rxjs'

import { enviroment } from '@enviroments/enviroment'
import { checkToken } from '@interceptors/token.interceptor'
import { User } from '@models/user'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly apiUrl = enviroment.API_URL

  user$ = new BehaviorSubject<User | undefined>(undefined)

  constructor(
    private httpClient: HttpClient
  ) {}

  getProfile() {
    return this.httpClient.get<User>(`${this.apiUrl}/auth/profile`, {
      context: checkToken()
    }).pipe(
      tap((res) => this.user$.next(res))
    )
  }
}
