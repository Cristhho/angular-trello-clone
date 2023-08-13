import { Injectable } from '@angular/core'
import { setCookie, getCookie, removeCookie } from 'typescript-cookie'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    setCookie('token', token, {
      expires: 365,
      path: '/'
    })
  }

  getToken() {
    return getCookie('token')
  }

  deleteToken() {
    removeCookie('token')
  }
}
