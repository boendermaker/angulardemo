import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopledetailComponent } from './peopledetail/peopledetail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopledetailComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
