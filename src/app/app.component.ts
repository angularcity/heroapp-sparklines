import {Component, OnInit, LOCALE_ID, Inject} from '@angular/core';
import {Hero} from './hero.model';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  languages = [
    { code: 'en', label: 'English'},
    { code: 'de', label: 'Deutsche'}
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {

  }

  ngOnInit() {
  }

}
