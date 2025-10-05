import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  features = [
    { title: 'Our Mission', description: 'To provide quality education and sports training to empower students.', icon: 'fa-bullseye' },
    { title: 'Our Vision', description: 'Create a nurturing environment for holistic growth and excellence.', icon: 'fa-eye' },
    { title: 'Our Values', description: 'Integrity, teamwork, innovation, and lifelong learning.', icon: 'fa-handshake' }
  ];
}
