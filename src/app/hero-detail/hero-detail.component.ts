import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor( private heroService: HeroService ,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap( (params: Params) => this.heroService.getHero(+params['id']))
      .subscribe( hero => this.hero = hero );
  }

  onBack() {
    this.router.navigate(['/']);
  }
  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.onBack());
  }


}
