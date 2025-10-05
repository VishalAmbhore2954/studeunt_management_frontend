import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Notification/nitification.service';
import { StudentService } from '../../../Services/Student/student.service';

@Component({
  selector: 'app-enroll',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent implements OnInit{

  enrollForm!: FormGroup;
  constructor(private service:StudentService,private fb:FormBuilder,private notification:NotificationService){}

  ngOnInit(): void {
    this.intiForm();
  }

  intiForm(){
    this.enrollForm = this.fb.group({
      fullname : [''],
      email : [''],
      dateofbirth : [''],
      gender : [''],
      city : [''],
      fathername : [''],
      mothername : [''],
      mobilenumber : [''],
      grade : [''],
      section : [''],
      previousschool : [''],
      rollnumber : [''],
      admissiondate : [''],
      studentid : [''],
      image : ['']
    })
  }

  submitForm(){
    this.service.storeStudentData(this.enrollForm.value).subscribe((response:any)=>{
      console.log("enroll data is",response)
      if(response){
        this.notification.showSuccess("Enroll data added successfully", "Success");
      }else{
        this.notification.showError("Failed to save", "Error");
      }
    })
  }
}
