import { Routes } from '@angular/router';
import { SignupComponent } from './Component/signup/signup.component';
import { LoginComponent } from './Component/login/login.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { HomeComponent } from './Component/home/home.component';
import { TeachersComponent } from './Component/teachers/teachers.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'home', component:HomeComponent},
    { path:'login',component:LoginComponent},
    { path:'signup', component:SignupComponent },
    { path: 'students-list', component: StudentListComponent },
    { path: 'teachers', component: TeachersComponent }
];
