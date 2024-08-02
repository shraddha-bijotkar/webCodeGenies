import { CanActivateFn, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn();

  if (!isLoggedIn) {
    router.navigate(['/users']);
    return false; // Prevent navigation to the route
  }

  return true; // Allow navigation to the route
};