import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';

export const Guard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);

  if(!authService.isLoggedIn()){
    router.navigate(['/login']);
    return false;
  }
  return true;
};
