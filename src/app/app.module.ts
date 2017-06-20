import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import { NavbarComponent } from './common/navbar/navbar.component';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { HeroService} from './hero.service';
import { HeroesComponent } from './heroes/heroes.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {HeroSearchService} from './hero-search.service';
import { SliderComponent } from './slider/slider.component';
import {IonRangeSliderModule} from 'ng2-ion-range-slider';
import {SliderService} from './slider/slider.service';
import { CoursesPipe } from './slider/courses.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroDetailComponent,
    HeroItemComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    SliderComponent,
    CoursesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    IonRangeSliderModule

  ],
  providers: [HeroService, HeroSearchService, SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
