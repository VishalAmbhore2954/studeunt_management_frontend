import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentLogsService {

  private apiUrl  = 'https://student-management-backend-2-xz3c.onrender.com';

  constructor(private http:HttpClient) { }

  getStudentLogs(queryParams:HttpParams) {
    return this.http.get(`${this.apiUrl}/studentslogs`, { params: queryParams });
  }
}
