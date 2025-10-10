import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiBaseUrl;
  // private apiUrl = 'https://student-management-backend-2-xz3c.onrender.com';

  constructor(private http: HttpClient) { }

  setUserRole(role: string, id:number) {
    return this.http.put(`${this.apiUrl}/user_role/${id}`, { user_role: role });
  }
}
