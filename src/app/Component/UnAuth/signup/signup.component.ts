import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from '../../../Services/Signup/signup.service';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../../Services/Notification/nitification.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  employeeForm! : FormGroup;

  constructor(private signupService:SignupService,private fb:FormBuilder,private notificationService: NotificationService){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.employeeForm = this.fb.group({
      name : [''],
      email : [''],
      password : [''],
      city : ['']
    })
  }

  onSubmit(){
    this.signupService.storeUserData(this.employeeForm.value).subscribe((response:any)=>{
      console.log("stored data is",response)
      if(response){
        this.notificationService.showSuccess("Signup data added successfully", "Success");
      }else{
        this.notificationService.showError("Failed to save", "Error");
      }
    })
  }
}
