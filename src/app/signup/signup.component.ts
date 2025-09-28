import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from '../signup.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  employeeForm! : FormGroup;

  constructor(private signupService:SignupService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.employeeForm = this.fb.group({
      name : [''],
      city : ['']
    })
  }

  onSubmit(){
    this.signupService.storeEmployeeData(this.employeeForm.value).subscribe((response:any)=>{
      console.log("stored data is",response)
      if(response){
        alert("Signup data added successfully");
      }else{
        alert("failed to save");
      }
    })
  }
}
