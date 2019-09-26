import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { PeopleService } from './services/people.service';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/people.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleMainComponent } from './people-main/people-main.component';

import { MovieUrlToIdPipe } from './pipes/getidfromurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PeopleDetailComponent,
    PeopleMainComponent,
    MovieUrlToIdPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
        people: reducer
    }),
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
