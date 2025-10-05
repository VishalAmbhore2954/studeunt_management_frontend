import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../Services/Student/student.service';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NotificationService } from '../../../Services/Notification/nitification.service';

@Component({
  selector: 'app-student-list',
  imports: [NgFor, NgIf],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  studentList: any[] = [];
  isLoading: boolean = false;
  userRole: string = 'user';

  constructor(
    private studentService: StudentService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.isLoading = true;
    this.studentService.getStudents().subscribe((response: any) => {
      this.studentList = response;
      this.isLoading = false;
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 15000);
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure to delete this student data?')) {
      this.studentService.deleteStudent(id).subscribe((response: any) => {
        if (response) {
          this.notificationService.showSuccess(
            'Student data deleted successfully',
            'Success'
          );
          this.getAllStudents();
        } else {
          this.notificationService.showError(
            'Failed to delete student data',
            'Error'
          );
        }
      });
    }
  }
}
