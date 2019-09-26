import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { takeLast, last, filter, map, flatMap } from 'rxjs/operators';
import { PeopleService } from '../services/people.service';
import { People } from '../models/people.model'
import { NewPeople } from '../models/newpeople.model'

import { Store } from '@ngrx/store';
import { AppState } from '../store/people.interface';
import * as PeopleActions from '../store/people.action';


@Component({
  selector: 'app-people-main',
  templateUrl: './people-main.component.html',
  styleUrls: ['./people-main.component.less']
})

export class PeopleMainComponent implements OnInit {
  
    people$: Observable<People[]>;
    peopleData: any;
    peopleTempData: any;
    movieData: any;
    filterPeopleMass = 100;
    filterMovie = 0;
    
    constructor(private store: Store<AppState>,
                private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.getPeopleData();
        this.getMovieData();
    }

    getPeopleData() {
        this.peopleService.peopleData$.subscribe((res: any) => {
            this.store.dispatch( new PeopleActions.GetPeopleData(res))
            this.store.select('people').pipe(
                    map((res: any) => res)
                )
                .subscribe( (res: any) => {
                this.peopleData = res[res.length-1].map((item: any) => new NewPeople(item));
                this.peopleTempData = this.peopleData;
            });
        });

        this.peopleService.loadPeople();
    }

    getMovieData() {
        this.peopleService.movieData$.subscribe((res:any) => {
            this.movieData = res.results;
        });
    }

    filterPeople() {
        const filteredArray = [];
        for(let i=0; i<this.peopleTempData.length; i++) {
            if ( (this.peopleTempData[i].films.includes(+this.filterMovie) || +this.filterMovie === 0) && +this.peopleTempData[i].mass <= +this.filterPeopleMass  ) {
                filteredArray.push(this.peopleTempData[i])
            }
        }
        this.peopleData = <[]>filteredArray;
    }

}
