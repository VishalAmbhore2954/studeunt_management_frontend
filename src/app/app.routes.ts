import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { HomeComponent } from './Component/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'home', component:HomeComponent},
    { path:'login',component:LoginComponent},
    { path:'signup', component:SignupComponent },
    { path: 'students-list', component: StudentListComponent }
];
