import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticatedLayoutComponent } from './Component/Auth/authenticated-layout/authenticated-layout.component';
import { UnauthenticatedLayoutComponent } from './Component/UnAuth/unauthenticated-layout/unauthenticated-layout.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AuthenticatedLayoutComponent, UnauthenticatedLayoutComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student management';
  userRole: string = 'admin';

  constructor(private router: Router) {}

  get isUnAuthenticated(): boolean {
    return this.router.url === '/login' || this.router.url === '/signup';
  }

  get isAuthenticated(): boolean {
    return !this.isUnAuthenticated;
  }
}
