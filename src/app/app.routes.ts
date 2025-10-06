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

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'home', component:HomeComponent},
    { path:'login',component:LoginComponent},
    { path:'signup', component:SignupComponent },
    { path: 'students-list', component: StudentListComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'sports', component: SportsComponent },
    { path: 'about', component: AboutComponent },
    { path : 'contact', component : ContactComponent },
    { path: 'enroll', component: EnrollComponent },
    { path: 'admin-panel', component: AdminPanelComponent },
    { path: 'users-list', component: UsersListComponent }
];
