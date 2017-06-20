import { Component, OnInit } from '@angular/core';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';
import {SliderService} from './slider.service';
import sparkly from 'sparkly';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  courses;
  filterCourses;
  minVal= 0;
  maxVal = 300;
  sparklines;
  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    this.courses = this.sliderService.getCourses();
    this.sparklines = sparkly([0, 50, 75, 75, 75, 75,75, 100, 120, 155, 20, 120, 150, 200, 250, 200, 150, 300, 100 , 50, 75, 50, 100,  75, 75, 75, 100, 100, 100 , 150, 199, 250, 300, 50, 75, 100, 250, 300, 250, 100, 100, 150, 200 ]);
  }
  myOnFinish(val) {
    this.minVal = val.from;
    this.maxVal = val.to;
  }


}
