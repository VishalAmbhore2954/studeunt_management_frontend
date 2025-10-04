import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(`https://student-management-backend-2-xz3c.onrender.com/student`);
  }

  deleteStudent(id: number) {
    return this.http.delete(`https://student-management-backend-2-xz3c.onrender.com/student/${id}`);
  }
}
