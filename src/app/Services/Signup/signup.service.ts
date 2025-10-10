import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = environment.apiBaseUrl;
  // private apiUrl = 'https://student-management-backend-2-xz3c.onrender.com';

  constructor(private http:HttpClient) { }

  storeUserData(data:any){
    return this.http.post(`${this.apiUrl}/users`,data);
  }

  getUsers(){
    return this.http.get(`${this.apiUrl}/users`);
  }

  deleteUser(id:number){
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
