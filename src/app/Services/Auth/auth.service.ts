import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    const userData = localStorage.getItem('userData');
    return !!userData;
  }

  logout() {
    localStorage.removeItem('userData');
  }
}
