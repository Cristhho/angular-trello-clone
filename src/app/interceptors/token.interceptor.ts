import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext
} from '@angular/common/http'
import { Observable, switchMap } from 'rxjs'

import { TokenService } from '@modules/auth/services/token.service'
import { AuthService } from '@modules/auth/services/auth.service'

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false)

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true)
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly tokenService: TokenService,
    private readonly authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(CHECK_TOKEN)) {
      const validToken = this.tokenService.isValidToken()
      if (validToken) {
        return this.addToken(request, next)
      } else {
        return this.updateTokensAndRefreshSession(request, next)
      }
    }

    return next.handle(request)
  }

  private addToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.tokenService.getToken()
    if (token) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })

      return next.handle(authRequest)
    }

    return next.handle(request)
  }

  private updateTokensAndRefreshSession(request: HttpRequest<unknown>, next: HttpHandler) {
    const validToken = this.tokenService.isValidRefreshToken()
    if (validToken) {
      return this.authService.refreshToken().pipe(
        switchMap(() => this.addToken(request, next))
      )
    }

    return next.handle(request)
  }
}
