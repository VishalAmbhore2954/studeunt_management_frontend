import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../Services/Login/login.service';
import { NotificationService } from '../../../Services/Notification/nitification.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private loginService: LoginService,private notificationService: NotificationService){}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.loginService.loginUser(this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          localStorage.setItem('userData', response);
          this.notificationService.showSuccess("Login Successfully","Success");
          if(response?.user_role === 'admin'){
          this.router.navigate(['/admin-panel']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        this.notificationService.showError("Login Failed","Error");
        }
      });
    } else {
      alert("Form is invalid");
      this.notificationService.showWarning("Please enter valid data","Warning");
    }
  }
}
