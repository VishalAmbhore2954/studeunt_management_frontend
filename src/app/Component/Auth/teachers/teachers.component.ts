import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  imports: [NgFor],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
   teachers = [
    { name: 'John Doe', subject: 'Mathematics', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', subject: 'Physics', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Michael Brown', subject: 'Chemistry', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Emily Johnson', subject: 'Biology', image: 'https://i.pravatar.cc/150?img=4' },
    { name: 'William Lee', subject: 'English', image: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Olivia Davis', subject: 'History', image: 'https://i.pravatar.cc/150?img=6' },
    { name: 'James Wilson', subject: 'Geography', image: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Sophia Martinez', subject: 'Computer Science', image: 'https://i.pravatar.cc/150?img=8' },
    { name: 'Benjamin Anderson', subject: 'Art', image: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Ava Thompson', subject: 'Physical Education', image: 'https://i.pravatar.cc/150?img=10' }
  ];
}
