import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

import { TokenService } from '@modules/auth/services/token.service'

export const redirectGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService)
  const router = inject(Router)

  const token = tokenService.isValidRefreshToken()
  if (token) {
    router.navigate(['/app'])
    return false
  }
  return true
};
