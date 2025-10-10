import { Routes } from '@angular/router';
import { SignupComponent } from './Component/UnAuth/signup/signup.component';
import { LoginComponent } from './Component/UnAuth/login/login.component';
import { StudentListComponent } from './Component/Auth/student-list/student-list.component';
import { HomeComponent } from './Component/Auth/home/home.component';
import { TeachersComponent } from './Component/Auth/teachers/teachers.component';
import { SubjectsComponent } from './Component/Auth/subjects/subjects.component';
import { SportsComponent } from './Component/Auth/sports/sports.component';
import { AboutComponent } from './Component/Auth/about/about.component';
import { ContactComponent } from './Component/Auth/contact/contact.component';
import { EnrollComponent } from './Component/Auth/enroll/enroll.component';
import { AdminPanelComponent } from './Component/Auth/admin-panel/admin-panel.component';
import { UsersListComponent } from './Component/Auth/users-list/users-list.component';
import { StudentLogsComponent } from './Component/Auth/student-logs/student-logs.component';
import { Guard } from './Guards/guard.';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path:'login',component:LoginComponent },
    { path:'signup', component:SignupComponent },

    { path:'home', component:HomeComponent, canActivate: [Guard] },
    { path: 'students-list', component: StudentListComponent, canActivate: [Guard] },
    { path: 'teachers', component: TeachersComponent, canActivate: [Guard] },
    { path: 'subjects', component: SubjectsComponent, canActivate: [Guard] },
    { path: 'sports', component: SportsComponent, canActivate: [Guard] },
    { path: 'about', component: AboutComponent,canActivate: [Guard] },
    { path : 'contact', component : ContactComponent,canActivate: [Guard] },
    { path: 'enroll', component: EnrollComponent,canActivate: [Guard] },
    { path: 'admin-panel', component: AdminPanelComponent,canActivate: [Guard] },
    { path: 'users-list', component: UsersListComponent, canActivate: [Guard] },
    { path: 'student-logs', component: StudentLogsComponent, canActivate: [Guard] },
];
