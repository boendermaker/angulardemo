import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { takeLast, last, map } from 'rxjs/operators';
import { PeopleService } from '../services/people.service';
import { People } from '../models/people.model'

import { Store } from '@ngrx/store';
import { AppState } from '../store/people.interface';
import * as PeopleActions from '../store/people.action';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.less']
})

export class PeopleDetailComponent implements OnInit {

    peopleDetailData = {};

    constructor(private store: Store<AppState>,
                private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.getPeopleDetail();
    }

    getPeopleDetail() {
        const itemID = this.peopleService.getItemIDFromUrl();

        this.peopleService.peopleDetailData$.subscribe((res: any) => {
            this.peopleDetailData = res;
        });

        this.peopleService.loadPeopleDetail(itemID);
    }

}
