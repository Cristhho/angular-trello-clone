import { Injectable } from '@angular/core'
import jwtDecode, { JwtPayload } from 'jwt-decode'
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

  saveRefreshToken(token: string) {
    setCookie('refresh', token, {
      expires: 365,
      path: '/'
    })
  }

  getToken() {
    return getCookie('token')
  }

  getRefreshToken() {
    return getCookie('refresh')
  }

  deleteToken() {
    removeCookie('token')
    this.deleteRefreshToken()
  }

  deleteRefreshToken() {
    removeCookie('refresh')
  }

  isValidToken() {
    const token = this.getToken()
    if(!token) {
      return false
    }

    const decodeToken = jwtDecode<JwtPayload>(token)
    if (decodeToken && decodeToken.exp) {
      const exp = new Date(0)
      const today = Date.now()
      exp.setUTCSeconds(decodeToken.exp)
      return exp.getTime() > today
    }
    return false
  }

  isValidRefreshToken() {
    const token = this.getRefreshToken()
    if(!token) {
      return false
    }

    const decodeToken = jwtDecode<JwtPayload>(token)
    if (decodeToken && decodeToken.exp) {
      const exp = new Date(0)
      const today = Date.now()
      exp.setUTCSeconds(decodeToken.exp)
      return exp.getTime() > today
    }
    return false
  }
}
