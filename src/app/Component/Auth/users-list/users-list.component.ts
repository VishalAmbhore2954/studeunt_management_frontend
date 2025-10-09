import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../../Services/Signup/signup.service';
import { NgFor, NgIf } from '@angular/common';
import { UserService } from '../../../Services/User/user.service';
import { NotificationService } from '../../../Services/Notification/nitification.service';

@Component({
  selector: 'app-users-list',
  imports: [NgFor,NgIf],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  userList: any;
  userRole: string = 'admin';

  constructor(private signupService: SignupService, private userService: UserService,private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.signupService.getUsers().subscribe((users:any)=>{
      this.userList = users;
      console.log("User list is",this.userList)
    })
  }

  deleteUser(id: number) {
    if (confirm('Are you sure to delete this user?')) {
      this.signupService.deleteUser(id).subscribe((response: any) => {
        if (response) {
          alert('User deleted successfully');
          this.getAllUsers();
        } else {
          alert('Failed to delete user');
        }
      });
    }
  }

  makeAdmin(id: number) {
    this.userService.setUserRole('admin', id).subscribe((response: any) => {
      if (response) {
        this.notificationService.showSuccess("User role updated to admin","Success");
      } else {
        this.notificationService.showError("Failed to update user role","Error");
      }
    });
  }
}
