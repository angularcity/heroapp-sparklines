import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../hero.model';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input() hero: Hero;
  @Input() currentlySelected;
  @Output() heroSelect = new EventEmitter<Hero>();
  @Output() heroDel = new EventEmitter<Hero>();
  constructor( private heroService: HeroService ) { }

  ngOnInit() {
  }
  onSelect() {
    this.heroSelect.emit(this.hero);
  }
  delete() {
    this.heroDel.emit(this.hero);
  }


}
