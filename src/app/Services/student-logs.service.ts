import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StudentLogsService {

  private apiUrl = environment.apiBaseUrl;
  // private apiUrl  = 'https://student-management-backend-2-xz3c.onrender.com';

  constructor(private http:HttpClient) {
    console.log("in service",this.apiUrl);
  }

  getStudentLogs(queryParams:HttpParams) {
    return this.http.get(`${this.apiUrl}/studentslogs`, { params: queryParams });
  }
}
