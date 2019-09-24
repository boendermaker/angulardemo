import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/people.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleMainComponent } from './people-main/people-main.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleDetailComponent,
    PeopleMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
        people: reducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
