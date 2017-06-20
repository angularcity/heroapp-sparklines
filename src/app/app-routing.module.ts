import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {SliderComponent} from './slider/slider.component';

const appRoutes: Routes = [
  {  path: '', component: DashboardComponent, pathMatch: 'full' },
  {  path: 'heroes', component: HeroesComponent  },
  {  path: 'heroes/:id', component: HeroDetailComponent  },
  {  path: 'courses', component: SliderComponent  }
];

@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}



