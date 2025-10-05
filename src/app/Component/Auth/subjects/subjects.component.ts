import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subjects',
  imports: [NgFor],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {
  subjects = [
    { name: 'Mathematics', description: 'Master numbers, logic, and equations.', icon: 'fa-calculator' },
    { name: 'Science', description: 'Explore biology, chemistry, and physics.', icon: 'fa-flask' },
    { name: 'English', description: 'Develop grammar, reading, and writing skills.', icon: 'fa-book' },
    { name: 'History', description: 'Travel through the stories of the past.', icon: 'fa-landmark' },
    { name: 'Computer Science', description: 'Learn coding, logic, and technology.', icon: 'fa-laptop-code' },
    { name: 'Geography', description: 'Understand the world and its landscapes.', icon: 'fa-globe' },
    { name: 'Economics', description: 'Learn how money and markets work.', icon: 'fa-chart-line' },
    { name: 'Art', description: 'Express creativity through drawing and design.', icon: 'fa-paint-brush' },
    { name: 'Physical Education', description: 'Promote fitness, teamwork, and discipline.', icon: 'fa-dumbbell' },
    { name: 'Music', description: 'Discover rhythm, melody, and instruments.', icon: 'fa-music' }
  ];
}
