import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleMainComponent } from './people-main/people-main.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
    { path: '', component: PeopleMainComponent },
    { path: 'people/:id', component: PeopleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
