import { Component } from '@angular/core';
import { StudentLogsService } from '../../../Services/student-logs.service';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-student-logs',
  imports: [NgFor, DatePipe],
  templateUrl: './student-logs.component.html',
  styleUrl: './student-logs.component.css'
})
export class StudentLogsComponent {
  studentList: any[] = [];

  constructor(private studentLogsService: StudentLogsService) {
    this.getAllStudentLogs();
  }

  getAllStudentLogs() {
    const queryParams = new HttpParams();
    this.studentLogsService.getStudentLogs(queryParams).subscribe((response: any) => {
      this.studentList = response;
    });
  }
}
