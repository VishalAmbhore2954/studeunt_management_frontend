import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  imports: [NgFor],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {
  sports = [
    { name: 'Football', description: 'Team sport played with a spherical ball.', icon: 'fa-football' },
    { name: 'Basketball', description: 'Fast-paced game with hoops and dribbling.', icon: 'fa-basketball-ball' },
    { name: 'Tennis', description: 'Racquet sport played individually or in doubles.', icon: 'fa-table-tennis' },
    { name: 'Cricket', description: 'Popular bat-and-ball game with teams.', icon: 'fa-cricket' },
    { name: 'Swimming', description: 'Improve fitness through water-based exercises.', icon: 'fa-swimmer' },
    { name: 'Athletics', description: 'Track and field events to test speed and strength.', icon: 'fa-running' },
    { name: 'Gymnastics', description: 'Perform acrobatics, flexibility, and balance skills.', icon: 'fa-person' },
    { name: 'Cycling', description: 'Outdoor sport using bicycles for fitness and competition.', icon: 'fa-bicycle' },
    { name: 'Yoga', description: 'Mind-body practice for strength and relaxation.', icon: 'fa-spa' },
    { name: 'Martial Arts', description: 'Learn discipline, self-defense, and agility.', icon: 'fa-fist-raised' }
  ];
}
