import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<'owner' | 'admin' | 'user' | null>(null);
  userRole$ = this.userSubject.asObservable();

  constructor() { }

  isLoggedIn(): boolean {
    const userData = localStorage.getItem('userData');
    this.setUserRole();
    return !!userData;
  }

  logout() {
    localStorage.removeItem('userData');
    this.userSubject.next(null);
  }

  setUserRole(){
    const userData = localStorage.getItem('userData');
    if(userData){
      const parsedData = JSON.parse(userData);
      this.userSubject.next(parsedData.data.user_role);
    }
  }

  getUserRole(){
    return this.userSubject;
  }
}
