import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // private apiUrl = environment.apiBaseUrl;
  private apiUrl = 'https://student-management-backend-2-xz3c.onrender.com';

  constructor(private http: HttpClient) { }

  storeStudentData(data: any) {
    return this.http.post(`${this.apiUrl}/student`, data);
  }

  getStudents() {
    return this.http.get(`${this.apiUrl}/student`);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/student/${id}`);
  }
}
