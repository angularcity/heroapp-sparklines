import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {
  COURSES = [
    { name: 'Angular4 by Maximilian', duration: 24, level: 'Intermediate', cost: 199},
    { name: 'Angular4 Demystified', duration: 18, level: 'Beginner', cost: 150},
    { name: 'Angular 2 first Look', duration: 12, level: 'Expert', cost: 199},
    { name: 'Angular Components', duration: 6, level: 'Beginner', cost: 100},
    { name: 'Angular Testing', duration: 4, level: 'Beginner', cost: 50},
    { name: 'Angular End to end', duration: 11, level: 'Intermediate', cost: 250},
    { name: 'All About Angular', duration: 11, level: 'Expert', cost: 75}
  ]
  constructor() { }

  getCourses() {
    return this.COURSES;
  }



}
