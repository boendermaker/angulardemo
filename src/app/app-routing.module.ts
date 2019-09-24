import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [

    { path: 'people/:id', component: HeroDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
