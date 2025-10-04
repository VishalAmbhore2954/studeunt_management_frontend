import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-student-list',
  imports: [NgFor,HeaderComponent,NgIf],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  studentList : any[] = [];
  isLoading: boolean = false;

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.isLoading = true;
    this.studentService.getStudents().subscribe((response:any)=>{
      console.log("student list is",response);
      this.studentList = response;
      this.isLoading = false;
      console.log("student list after assign",this.studentList);
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 15000);
  }

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe((response:any)=>{
      console.log("deleted response is",response);
      if(response){
        alert("student data deleted successfully");
        this.getAllStudents();
      }else{
        alert("failed to delete student data");
      }
    })
  }
}
