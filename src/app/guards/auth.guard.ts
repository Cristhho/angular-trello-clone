import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

import { TokenService } from '@modules/auth/services/token.service'

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService)
  const router = inject(Router)

  const token = tokenService.getToken()
  if (!token) {
    router.navigate(['/login'])
    return false
  }
  return true
};
