import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private apiUrl = 'https://student-management-backend-2-xz3c.onrender.com';

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
