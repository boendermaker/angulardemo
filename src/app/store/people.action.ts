import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { People } from './../models/People.model'

export const GET_PEOPLEDATA = '[PEOPLE] Get'
export const GET_PEOPLEITEM = '[PEOPLE] Getitem'

export class GetPeopleData implements Action {
    readonly type = GET_PEOPLEDATA

    constructor(public payload: People) {}
}

export class GetPeopleItem implements Action {
    readonly type = GET_PEOPLEITEM

    constructor(public payload: number) {}
}

export type Actions = GetPeopleData | GetPeopleItem