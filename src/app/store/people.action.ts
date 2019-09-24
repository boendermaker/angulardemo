import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { People } from './../models/People.model'

export const SET_PEOPLE = '[PEOPLE] Set'

export class SetPeople implements Action {
    readonly type = SET_PEOPLE;

    constructor(public payload: People) {
    }
}

export type Actions = SetPeople