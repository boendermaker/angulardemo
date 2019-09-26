import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { People } from '../models/people.model';


@Injectable()
export class PeopleService {
    _baseUrl = 'https://swapi.co/api/';
    loading = false;
    peopleDetailData$ = new Subject();
    peopleData$ = new Subject();
    movieData$ = new Subject();
    speciesData$ = new Subject();

    constructor(private http: HttpClient) { }

    loadPeople() {
        this.loading = true;
        this.http.get(`${this._baseUrl}people`).subscribe((res: any) => {
            this.peopleData$.next(res.results);
            this.loadMovies();
            //this.loadSpecies();
            this.loading = false;
        });
    }

    loadPeopleDetail(id) {
        this.loading = true;
        this.http.get(`${this._baseUrl}people/${id}/`).subscribe((res: any) => {
            this.peopleDetailData$.next(res);
            this.loading = false;
        });
    }

    loadMovies() {
        console.log('Load MOVIE')
        this.http.get(`${this._baseUrl}films/`).subscribe((res: any) => {
            this.movieData$.next(res);
        });
    }

    loadSpecies() {
        this.http.get(`${this._baseUrl}species/`).subscribe((res: any) => {
            this.speciesData$.next(res);
        });
    }

    getItemIDFromUrl() {
        const urlArray = window.location.pathname.split('/');
        return urlArray[urlArray.length-1];
    }

}