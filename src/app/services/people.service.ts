import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { People } from '../models/people.model';


@Injectable({
    providedIn: 'root'
})

export class PeopleService {
    private _baseUrl = 'https://swapi.co/api/';
    public loading = false;
    public peopleData$ = new Subject();

    constructor(private http: HttpClient) { }

    loadPeople() {
        this.loading = true;
        this.http.get(this._baseUrl + 'people').subscribe((res: any) => {
            this.peopleData$.next(res.results);
            this.loading = false;
        });
    }

}