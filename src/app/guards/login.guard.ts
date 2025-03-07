import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isLoggedIn();
};
