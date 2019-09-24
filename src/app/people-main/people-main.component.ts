import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/people.interface';
import { People } from '../models/people.model'
import * as PeopleActions from '../store/people.action';
import { Observable } from 'rxjs/Observable';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-main',
  templateUrl: './people-main.component.html',
  styleUrls: ['./people-main.component.sass']
})

export class PeopleMainComponent implements OnInit {
  
    people$: Observable<People[]>;
    
    constructor(private store: Store<AppState>,
                private peopleService: PeopleService) { 
                    
        this.people$ = store.select('people');
    }

    ngOnInit() {
        this.peopleService.peopleData$.subscribe((res: any) => {
            this.store.dispatch(new PeopleActions.SetPeople(res.results) )
            this.people$ = this.store.select('people');
            console.log('LOADED')
        });

        this.peopleService.loadPeople();

    }

}
